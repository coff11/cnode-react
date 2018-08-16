import React, { Component } from 'react'
import moment from 'moment'

import { ItemWrapper, Avatar, RightWrapper } from './style'


class ReviewItem extends Component {

  render() {
    const { avatarUrl, userName, replyTime, content } = this.props
    return (
      <ItemWrapper>
        <Avatar>
          <img src={avatarUrl} alt='avatar'/>
        </Avatar>
        <RightWrapper>
          <div>
            <span className='user-name'>{userName}</span>
            <span className='reply-time'>{moment(replyTime).format('gggg-M-DD')}</span>
          </div>
          <div className='review-content' dangerouslySetInnerHTML={{__html: content}}></div>
        </RightWrapper>
      </ItemWrapper>
    )
  }

}

export default ReviewItem
