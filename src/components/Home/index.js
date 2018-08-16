import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import ListItem from '../ListItem'
import Tab from '../Tab'

import { ListWrapper, Spiner, LoadMore } from './style'
import { loadMoreData } from '../../store/actionCreators'


class Lists extends Component {

  render() {
    const { isLoading, arr } = this.props
    return (
      <Fragment>

        <Tab />

        <ListWrapper>
          <ul>
            {arr.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  avtSrc={item.author.avatar_url}
                  tab={item.tab}
                  top={item.top}
                  good={item.good}
                  atcTitle={item.title}
                  atcId={item.id}
                  replyCount={item.reply_count}
                  visitCount={item.visit_count}
                  replyTime={item.last_reply_at}
                ></ListItem>
              )
            })}
            {isLoading? <Spiner></Spiner> : null }
          </ul>
          <LoadMore id='load-more'></LoadMore>
        </ListWrapper>

      </Fragment>
    )
  }

  // 判断一个元素是否完全进入了可视区
  isVisible(element) {
    const rect = element.getBoundingClientRect()
    const {
      top,
      left,
      bottom,
      right
    } = rect
    return (
      top >= 0
      &&
      left >= 0
      &&
      bottom < document.documentElement.clientHeight
      &&
      right < document.documentElement.clientWidth
    )
  }

  componentDidUpdate() {
    const { tab, handleLoadMore } = this.props
    const btn = document.getElementById('load-more')
    const this_ = this

    // 降低滚动事件的监听频率，提高性能
    function load () {
      let canRun=true
      return () => {
          if(!canRun){ return }
          canRun=false
          setTimeout(() => {
            this_.isVisible(btn) && handleLoadMore(tab)
            canRun=true
          }, 600)
      }
    }
    window.onscroll = load()
  }

}

const mapStateToProps = (state) => {
  return {
    arr: state.articleLists,
    isLoading: state.isLoading,
    tab: state.hasBottom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadMore(tab) {
      dispatch(loadMoreData(tab))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
