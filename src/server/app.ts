'use strict'
import * as express from 'express'
import * as passport from 'passport'
import * as bodyParser from 'body-parser'
import { getEndpointsForEntity } from './routes'
import { Coupon, Partner } from '../model'

const app = express()

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

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

app.get('/user', (req, res) => {
  res
    .status(200)
    .send(req.user)
    .end()
})

app.use('/', express.static('build/client'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
