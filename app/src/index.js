import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import GeniusInfo from './container/geniusinfo/geniusinfo'
import BossInfo from './container/bossinfo/bossinfo'
import Login from './container/login/login'
import Register from './container/register/register'
import Dashboard from './component/dashboard/dashboard'
import reducers from './reducer'
import './config';
import AuthRoute from './component/authroute/authroute'
import './static/icon/iconfont.css'
import './static/css/index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension():f=>f
))

//boss genius me msg
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
     <div>
      <AuthRoute/>
      <Switch>
      <Route path='/geniusinfo' component={GeniusInfo}></Route>
      <Route path='/bossinfo' component={BossInfo}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route component={Dashboard}></Route>
      </Switch>
     </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
