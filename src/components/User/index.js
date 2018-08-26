import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadUserDataAction, clickItemsAllAction } from '../../store/actionCreators'
import { UserWrapper, UserAvatar, RecentWrapper, Logout } from './style'


class User extends Component {

  render() {
    const { userAvtUrl, handleBtnLogout, recentReplies, recentTopics, userName  } = this.props
    return (
      <UserWrapper>
        <UserAvatar>
          <img src={userAvtUrl}  alt=''/>
          <div>{userName}</div>
          <Logout>
            <Link to='/' onClick={handleBtnLogout}>退出</Link>
          </Logout>
        </UserAvatar>
        <RecentWrapper>
          <div className='replies'>
            <div className='header'>最近回复的话题</div>
            <ul>
              {recentReplies.length === 0? '最近没有发布过话题' : recentReplies.map((item) => {
                return <li key={item.id}>{item.title}</li>
              })}
            </ul>
          </div>
          <div className='topics'>
            <div className='header'>最新的主题</div>
            <ul>
              {recentTopics.length === 0? '最近没有新的回复' : recentTopics.map((item) => {
                return <li key={item.id}>{item.content}</li>
              })}
            </ul>
          </div>
        </RecentWrapper>
      </UserWrapper>
    )
  }

  componentDidMount() {
    this.props.loadUserData(this.props.userName)
  }

}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userAvtUrl: state.userAvtUrl,
    recentReplies: state.recentReplies,
    recentTopics: state.recentTopics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserData(userName) {
      dispatch(loadUserDataAction(userName))
    },
    handleBtnLogout() {
      window.localStorage.removeItem('accesstoken')
      window.localStorage.removeItem('username')
      window.location.href='/'
      dispatch(clickItemsAllAction('all'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
