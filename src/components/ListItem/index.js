import React, { Component } from 'react'
import { Item, Avatar, Tag, Title, InfoWrapper, OthInfo } from './style'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickTitleAction } from '../../store/actionCreators'

class ListItem extends Component {
  render() {

    const { avtSrc, good, tab, top } = this.props

    return (
      <Item>
        <Avatar>
          <img src={avtSrc} alt='avatar'/>
        </Avatar>
        <Tag className={top? 'top' : good? 'good' : tab}>{this.getTabCn(top? 'top' : good? 'good' : tab)}</Tag>
        <InfoWrapper>
          <Title>
            <Link 
              to='/detail' 
              onClick={this.props.handleTitleClick.bind(this, this.props.atcId)
              }>{this.props.atcTitle}</Link>
          </Title>
          <OthInfo>
            <div>{this.props.replyCount}/{this.props.visitCount}</div>
            {/* moment(date).toNow()获取的是传入时间date与现在的时差 */}
            <div>{this.getTimeCn(moment(this.props.replyTime).toNow(true))}前</div>
          </OthInfo>
        </InfoWrapper>
      </Item>
    )
  }

  getTabCn(tab) {
    switch(tab) {
      case 'share':
        return '分享'
      case 'job':
        return '招聘'
      case 'ask':
        return '问答'
      case 'good':
        return '精华'
      case 'top':
        return '置顶'
      default:
        return ''
    }
  }

  // 根据moment().toNow()获取的时差转换成中文格式
  getTimeCn(time) {
    const arr = time.split(' ')
    let num = arr[0]
    switch(num) {
      case 'a':
        num = 1
        break
      case 'an':
        num = 1
        break
      default:
        num += ''
    }
    let date = arr[1]
    switch(date) {
      case 'seconds':
        date = '秒'
        break
      case 'minute':
        date = '分钟'
        break
      case 'minutes':
        date = '分钟'
        break
      case 'hour':
        date = '小时'
        break
      case 'hours':
        date = '小时'
        break
      case 'day':
        date = '天'
        break
      case 'days':
        date = '天'
        break
      case 'month':
        date = '月'
        break
      case 'months':
        date = '月'
        break
      case 'year':
        date = '年'
        break
      case 'years':
        date = '年'
        break
      default:
        date += ''
    }
    return [num, date].join('')
  }


}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTitleClick(atcId) {
      dispatch(clickTitleAction(atcId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)