import { Router, RequestHandler } from 'express'
import getDatastore from '../lib/getDatastore'
import { Entity } from '../../model'

const datastore = getDatastore()

const parseEntityNameFromEndpoint = (path: string) => path.split('/')[2]

const getEntities = async (datastoreKey: string, limit: number) => {
  const query = datastore.createQuery(datastoreKey).limit(limit)
  const [results] = await datastore.runQuery(query)
  return results
}

const returnEntities: RequestHandler = async (req, res, next) => {
  try {
    const datastoreKey = parseEntityNameFromEndpoint(req.path)
    const results = await getEntities(datastoreKey, 10)
    res.send(results).end()
  } catch (e) {
    res
      .status(500)
      .send(e)
      .end()
  }
  next()
}

const putOrPostHandler: RequestHandler = async (req, res, next) => {
  const entities = req.body.map((data: Entity) => ({
    key: datastore.key([parseEntityNameFromEndpoint(req.path), data.id]),
    data,
  }))

  try {
    await datastore.upsert(entities)
    res.status(201)
  } catch (e) {
    res
      .status(500)
      .send(e)
      .end()
  }
  next()
}

const deleteEntitiesInBody: RequestHandler = async (req, res, next) => {
  const entityKeys = req.body.map((data: Entity) =>
    datastore.key([parseEntityNameFromEndpoint(req.path), data.id]),
  )

  try {
    await datastore.delete(entityKeys)
    res.status(200)
    next()
  } catch (e) {
    res
      .status(500)
      .send(e)
      .end()
  }
}

export const getEndpointsForEntity = (
  entityExamples: Entity[],
  endpoint: string,
) => {
  const routesForEntity = Router()

  const datastoreKey = parseEntityNameFromEndpoint(endpoint)

  const defaultEntities = entityExamples.map((data) => ({
    key: datastore.key([datastoreKey, data.id]),
    data,
  }))

  const populateDataStore = async () => {
    await datastore.upsert(defaultEntities)
  }

  populateDataStore()

  routesForEntity.get(endpoint, returnEntities)

  routesForEntity.delete(
    `${endpoint}/all`,
    async (req, res, next) => {
      const query = datastore.createQuery(datastoreKey)
      req.body = (await datastore.runQuery(query))[0]
      next()
    },
    deleteEntitiesInBody,
    returnEntities,
  )

  routesForEntity.delete(endpoint, deleteEntitiesInBody, returnEntities)

  routesForEntity.put(endpoint, putOrPostHandler, returnEntities)
  routesForEntity.post(endpoint, putOrPostHandler, returnEntities)

  return routesForEntity
}
