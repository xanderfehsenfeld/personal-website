'use strict'
import * as express from 'express'

import { Datastore } from '@google-cloud/datastore'
import * as session from 'express-session'
import * as passport from 'passport'
import * as bodyParser from 'body-parser'

import {
  oauth2Routes,
  config,
  redirectToLoginIfUnauthorized,
  authRequired,
} from './lib/oauth2'
import { getEndpointsForEntity } from './routes'
import { Coupon, Partner } from '../model'

const DatastoreStore = require('@google-cloud/connect-datastore')(session)

const app = express()

const sessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: config['OAUTH2_CLIENT_SECRET'],
  signed: true,
  store: new DatastoreStore({
    dataset: new Datastore({ kind: 'express-sessions' }),
  }),
}

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(oauth2Routes)

const defaultTestCoupons: Coupon[] = [
  {
    name: 'pizza coupon',
    id: 'abcd',
    isAvailable: false,
  },
  {
    name: 'cookies coupon',
    id: '135135',
    isAvailable: true,
  },
]

app.use(getEndpointsForEntity(defaultTestCoupons, '/api/coupons'))

const defaultTestPartners: Partner[] = [
  {
    id: 'google',
    partnerDescription: 'do no evil',
    website: 'https://www.google.com/',
    cloudPlatformPartner: true,
    dt: new Date(),
  },
  {
    id: 'UpTop',
    partnerDescription: 'UX Solutions & Development',
    website: 'https://www.uptopcorp.com/',
    cloudPlatformPartner: false,
    dt: new Date(),
  },
]
app.use(getEndpointsForEntity(defaultTestPartners, '/api/partners'))

app.get('/user', authRequired, (req, res) => {
  res
    .status(200)
    .send(req.user)
    .end()
})

app.use('/', redirectToLoginIfUnauthorized, express.static('build/client'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
