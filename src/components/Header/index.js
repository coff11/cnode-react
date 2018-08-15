import React, { Component } from 'react'
import { Wrapper, Logo, Logbtn, UserWrapper } from './style'
import { HashRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickItemsAllAction, loadUserDataAction } from '../../store/actionCreators'

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>
          <HashRouter>
            <Link to='/' onClick={this.props.handleLinkClick}>CNode</Link>
          </HashRouter>
        </Logo>
        <Logbtn>
          <HashRouter>
            {window.localStorage.getItem('username')? 
              <UserWrapper>
                <Link to='/user' onClick={this.props.clickLink}>个人中心</Link>
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
      dispatch(clickItemsAllAction())
    },
    clickLink() {
      dispatch(loadUserDataAction(window.localStorage.getItem('username')))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)