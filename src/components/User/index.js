import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserWrapper, UserAvatar, RecentWrapper, Logout } from './style'
import { loadUserDataAction, clickItemsAllAction } from '../../store/actionCreators'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    return (
      <UserWrapper>
        <UserAvatar>
          <img src={this.props.userAvtUrl}  alt=''/>
          <Logout>
            <Link to='/' onClick={this.props.handleBtnLogout}>退出</Link>
          </Logout>
        </UserAvatar>
        <RecentWrapper>
          <div className='replies'>
            <div className='header'>最近回复的话题</div>
            <ul>
              {this.props.recentReplies.length === 0? '最近没有发布过话题' : this.props.recentReplies.map((item, index) => {
                return <li key={item.id}>{item.title}</li>
              })}
            </ul>
          </div>
          <div className='topics'>
            <div className='header'>最新的主题</div>
            <ul>
              {this.props.recentTopics.length === 0? '最近没有新的回复' : this.props.recentTopics.map((item, index) => {
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
      dispatch(clickItemsAllAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)