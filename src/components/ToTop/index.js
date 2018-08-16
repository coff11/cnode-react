import React, {Component} from 'react'

import { Back } from './style'


class ToTop extends Component {

  constructor(props) {
    super(props)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render() {
    return (
      <Back 
        id='top-btn'
        onClick={this.handleBtnClick} 
      >Top</Back>
    )
  }

  handleBtnClick() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      // 变量t是滚动条滚动时，到顶部的距离
      const t = document.documentElement.scrollTop || document.body.scrollTop
      const topBtn = document.getElementById('top-btn')
      topBtn && (topBtn.style.opacity = t >= 100 ? 1 : 0)
    })
  }

}

export default ToTop