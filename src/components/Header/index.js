import React, { Component } from 'react'
import { Wrapper, Logo, Login } from './style'
import { HashRouter, NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>
          <HashRouter>
            <NavLink to='/'>CNode</NavLink>
          </HashRouter>
        </Logo>
        <Login>
          <a>登录</a>
        </Login>
      </Wrapper>
    )
  }
}

export default Header