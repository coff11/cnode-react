import React, { Component } from 'react'
import Header from './components/Header'
import { HashRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import { Provider } from 'react-redux'
import store from './store'
import { clickItemsAllAction } from './store/actionCreators'
import ToTop from './components/ToTop'
import Login from './components/Login'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <HashRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' component={Detail}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/user' component={User}></Route>
            </div>
          </HashRouter>
          <ToTop></ToTop>
        </div>
      </Provider>
    )
  }

  componentDidMount() {
    store.dispatch(clickItemsAllAction())
  }

}

export default App
