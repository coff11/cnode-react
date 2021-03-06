import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Toast from '../Toast'

import { clickLogBtnAction, clickItemsAllAction } from '../../store/actionCreators'
import { LogWrapper, LogBtn, Info } from './style'


class Login extends Component {

  render() {
    const { isLogin, info, logBtnClick } = this.props
    if (isLogin) {
      return <Redirect to='/'/>
    } else {
      return (
        <LogWrapper>
          <img src='http://7xrart.com1.z0.glb.clouddn.com/%E7%99%BB%E5%BD%95%E5%AF%86%E7%A0%81.png' alt='log'/>
          <p>未登录</p>
          <input placeholder='请输入accesstoken'  ref={(input) => {this.tokenEle = input}} />
          <LogBtn onClick={() => logBtnClick(this.tokenEle) }>
            <a>登录</a>
          </LogBtn>
          {info === ''? null: <Toast />}
          <Info>
            <li>可以前往<a href='https://cnodejs.org'>CNode</a>官网使用GitHub注册获取accesstoken</li>
            <li>数据均来源于官方API，请放心使用</li>
          </Info>
        </LogWrapper>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    info: state.toastInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logBtnClick(tokenEle) {
      dispatch(clickLogBtnAction(tokenEle.value))
      dispatch(clickItemsAllAction('all'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
