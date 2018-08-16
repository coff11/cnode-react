import React, { Component } from 'react'
import { connect } from 'react-redux'

import { emptyInfoAction } from '../../store/actionCreators'
import { ToastWrapper } from './style'

/*
 * （组件——显示提示信息）
 * 实现方式： 
 * 定义状态 toastInfo ，类型为字符串，用于在页面上显示的文字，默认值为空
 * 先在可能使用提示信息的组件内注入该组件  {this.prop.toastInfo === ''? null: <Toast />} 
 * 当需要显示提示信息时，派发 action:displayInfo('需要显示的信息')
 * 当组件被加载到页面上时，组件会自动通过生命周期函数componentDidMount触发定时器，用于2秒后清空 toastInfo 使得组件消失
 */
class Toast extends Component {

  render() {
    return (
      <ToastWrapper>{this.props.info}</ToastWrapper>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.emptyToastInfo()
    }, 2000)
  }
  
}

const mapStateToProps = (state) => {
  return {
    info: state.toastInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyToastInfo() {
      dispatch(emptyInfoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
