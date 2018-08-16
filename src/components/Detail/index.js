import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import ReviewList from '../Review'
import Toast from '../Toast'

import { displayInfo, addRepliesAction, clickItemsAllAction } from '../../store/actionCreators'
import { 
  DetailWrapper, 
  DetailHeader, 
  BackToHome, 
  DetailBody, 
  ReviewInfo, 
  ReviewArea 
} from './style'


class Detail extends Component {

  render() {
    const { 
      title, 
      createTime, 
      authorName, 
      visitCount, 
      content, 
      isLoaded,
      info,
      handleClickReply
    } = this.props
    return (
      <Fragment>

        <BackToHome>
          <Link to='/'>回到首页</Link>
        </BackToHome>

        <DetailWrapper>
          <DetailHeader>
            <div className='title'>{title}</div>
            <div>
              <span className='create-time'>发布于{moment(createTime).format('gggg-M-DD')}</span>
              作者
              <span className='author'>{authorName}</span> 
              <span>{visitCount}次浏览</span>
            </div>
          </DetailHeader>
          <DetailBody>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
          </DetailBody>
          <ReviewInfo className={isLoaded? 'show' : 'hide'}>评论</ReviewInfo>
          <ReviewArea  className={isLoaded? 'show' : 'hide'}>
            <textarea  placeholder='说点什么吧~' ref={(el) => {this.txtEl = el}}/>
            <Link
              to={window.localStorage.getItem('accesstoken')? '/' : '/detail'}
              className='rev-btn' 
              onClick={() => handleClickReply(this.txtEl, this.props.id)}
            >回复</Link>
            {info === ''? null: <Toast />}      {/*  当用户未登录时显示提示信息  */}
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
        dispatch(clickItemsAllAction('all'))
      } else {
        dispatch(displayInfo('请先登录'))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
