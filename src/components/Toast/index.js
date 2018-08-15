import React, { Component } from 'react'
import { ToastWrapper } from './style'
import { connect } from 'react-redux'
import { emptyInfoAction } from '../../store/actionCreators'

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