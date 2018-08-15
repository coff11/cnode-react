import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListsWrapper } from './style'
import ReviewItem from '../ReviewItem'



class ReviewList extends Component {
  render() {
    return (
      <ListsWrapper>
        {this.props.replies.map((item, index) => {
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

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)