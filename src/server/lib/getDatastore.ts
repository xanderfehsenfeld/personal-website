import { Datastore } from '@google-cloud/datastore'

const getDatastore = () =>
  new Datastore({
    projectId: 'partner-credit-console-rebuild',
  })

export default getDatastore
