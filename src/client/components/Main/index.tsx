import * as React from 'react'
import Table from '../Table'
import Header from '../Header'
import { Provider as UnstatedProvider } from 'unstated'
import Weather from '../Weather'

const Main = () => (
  <UnstatedProvider>
    <Weather />
  </UnstatedProvider>
)

export default Main
