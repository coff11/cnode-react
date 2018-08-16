import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { clickItemsAllAction, loadUserDataAction } from '../../store/actionCreators'
import { Wrapper, Logo, Logbtn, UserWrapper } from './style'


class Header extends Component {

  render() {
    const { handleLinkClick, clickLink } = this.props
    return (
      <Wrapper>

        <Logo>
          <HashRouter>
            <Link to='/' onClick={handleLinkClick}>CNode</Link>
          </HashRouter>
        </Logo>

        <Logbtn>
          <HashRouter>
            {window.localStorage.getItem('username')? 
              <UserWrapper>
                <Link to='/user' onClick={clickLink}>个人中心</Link>
                <span>coff11</span>
              </UserWrapper>
              :
             <Link to='/login'>登录</Link>}
          </HashRouter>
        </Logbtn>
        
      </Wrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    username: state.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLinkClick() {
      dispatch(clickItemsAllAction('all'))
    },
    clickLink() {
      dispatch(loadUserDataAction(window.localStorage.getItem('username')))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
