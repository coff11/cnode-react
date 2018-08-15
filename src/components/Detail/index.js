import React, { Component, Fragment } from 'react'
import { DetailWrapper, DetailHeader, BackToHome, DetailBody, ReviewInfo, ReviewArea } from './style'
import { connect } from 'react-redux'
import { HashRouter, Link } from 'react-router-dom'
import moment from 'moment'
import ReviewList from '../Review'
import { displayInfo, addRepliesAction, clickItemsAllAction } from '../../store/actionCreators'
import Toast from '../Toast'

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <BackToHome>
          <HashRouter>
            <Link to='/'>回到首页</Link>
          </HashRouter>
        </BackToHome>
        <DetailWrapper>
          <DetailHeader>
            <div className='title'>{this.props.title}</div>
            <div>
              <span className='create-time'>发布于{moment(this.props.createTime).format('gggg-M-DD')}</span>
              作者
              <span className='author'>{this.props.authorName}</span> 
              <span>{this.props.visitCount}次浏览</span>
            </div>
            <div></div> 
          </DetailHeader>
          <DetailBody>
            <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
          </DetailBody>

          <ReviewInfo className={this.props.isLoaded? 'show' : 'hide'}>评论</ReviewInfo>
          <ReviewArea  className={this.props.isLoaded? 'show' : 'hide'}>
            <textarea  placeholder='说点什么吧~' ref={(el) => {this.txtEl = el}}/>
            <Link
              to='/'
              className='rev-btn' 
              onClick={() => this.props.handleClickReply(this.txtEl, this.props.id)}
            >回复</Link>
            {this.props.info === ''? null: <Toast />}
          </ReviewArea>
        </DetailWrapper>
        <ReviewList></ReviewList>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    content: state.dtContent,
    id: state.dtActId,
    title: state.dtTitle,
    isLoaded: state.reviewLoaded,
    authorName: state.dtAuthorName,
    createTime: state.dtCreateTime,
    visitCount: state.dtVisitCount,
    info: state.toastInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickReply(el, id) {
      if (window.localStorage.getItem('accesstoken')) {
        dispatch(addRepliesAction(el.value, id))
        dispatch(clickItemsAllAction())
        console.log(this)
      } else {
        dispatch(displayInfo('请先登录'))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)