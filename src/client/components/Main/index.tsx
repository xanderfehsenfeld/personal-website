import * as React from 'react'
import Table from '../Table'
import Header from '../Header'
import { Provider as UnstatedProvider } from 'unstated'
import Weather from '../Weather'

const Main = () => (
  <UnstatedProvider>
    <Header />
    <div className={'container'}>
      <Weather />
    </div>
  </UnstatedProvider>
)

export default Main
