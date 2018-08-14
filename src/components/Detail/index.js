import React, { Component, Fragment } from 'react'
import { DetailWrapper, DetailHeader, BackToHome, DetailBody } from './style'
import { connect } from 'react-redux'
import { HashRouter, NavLink } from 'react-router-dom'
import moment from 'moment'

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <BackToHome>
          <HashRouter>
            <NavLink to='/'>回到首页</NavLink>
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
        </DetailWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.dtContent,
    id: state.dtActId,
    title: state.dtTitle,
    authorName: state.dtAuthorName,
    createTime: state.dtCreateTime,
    replies: state.dtReplies,
    visitCount: state.dtVisitCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)