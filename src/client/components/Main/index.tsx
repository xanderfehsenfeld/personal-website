import * as React from 'react'
import Table from '../Table'
import Header from '../Header'
import { Provider as UnstatedProvider } from 'unstated'

const Main = () => (
  <UnstatedProvider>
    <Header />
    <div className={'container'}>
      <Table title={'Coupons'} endpoint={'/api/coupons'} />
    </div>
  </UnstatedProvider>
)

export default Main
