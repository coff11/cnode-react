import React, { Component } from 'react'
import { ItemWrapper, Avatar, RightWrapper } from './style'
import { connect } from 'react-redux'
import moment from 'moment'

class ReviewItem extends Component {
  render() {
    return (
      <ItemWrapper>
        <Avatar>
          <img src={this.props.avatarUrl} alt='avatar'/>
        </Avatar>
        <RightWrapper>
          <div>
            <span className='user-name'>{this.props.userName}</span>
            <span className='reply-time'>{moment(this.props.replyTime).format('gggg-M-DD')}</span>
          </div>
          <div className='review-content' dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        </RightWrapper>
      </ItemWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)