//导入react相关
import React, { memo,useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//导入网络请求，actionCreators，utils
import routes from './route'
import store from './store'

//导入组件
import HYAppHeader from 'components/app-header'
import HYAppFooter from 'components/app-footer'



export default memo(function App() {
  useEffect(() => {
    console.log('store',store.getState())
   
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYAppHeader />
        {renderRoutes(routes)}
        <HYAppFooter />
      </BrowserRouter>
    </Provider>
  )
})
