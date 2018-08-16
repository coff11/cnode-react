import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReviewItem from '../ReviewItem'

import { ListsWrapper } from './style'


class ReviewList extends Component {

  render() {
    return (
      <ListsWrapper>
        {this.props.replies.map((item) => {
          return (<ReviewItem
            key={item.id}
            avatarUrl={item.author.avatar_url}
            userName={item.author.loginname}
            content={item.content}
            replyTime={item.create_at}
          ></ReviewItem>)
        })}
      </ListsWrapper>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    replies: state.dtReplies
  }
}

export default connect(mapStateToProps, null)(ReviewList)
