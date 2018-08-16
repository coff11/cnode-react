import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { clickItemsAllAction } from '../../store/actionCreators'
import { TabWrapper } from './style'


class Tab extends Component {

  render() {
    const { tab, handleLinkClickAll } = this.props
    return (
      <TabWrapper>
          <div>
            <ul>
              <li>
                <NavLink to='/' 
                  onClick={() => handleLinkClickAll('all')} 
                  className={tab === 'all'? ' pink-bottom' : ' '}
                >全部</NavLink>
                <NavLink to='/' 
                  onClick={() => handleLinkClickAll('good')}
                  className={tab === 'good'? ' pink-bottom' : ' '}
                >精华</NavLink>
                <NavLink to='/'
                  onClick={() => handleLinkClickAll('share')}
                  className={tab === 'share'? ' pink-bottom' : ' '}
                >分享</NavLink>
                <NavLink to='/'
                  onClick={() => handleLinkClickAll('ask')}
                  className={tab === 'ask'? ' pink-bottom' : ' '}
                >问答</NavLink>
                <NavLink to='/'
                  onClick={() => handleLinkClickAll('job')}
                  className={tab === 'job'? ' pink-bottom' : ' '}                
                >招聘</NavLink>
              </li>
            </ul>
          </div>

      </TabWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    tab: state.hasBottom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLinkClickAll(v) {
      dispatch(clickItemsAllAction(v))
    },
    handleLinkClickGood(v) {
      dispatch(clickItemsAllAction(v))
    },
    handleLinkClickShare(v) {
      dispatch(clickItemsAllAction(v))
    },
    handleLinkClickAsk(v) {
      dispatch(clickItemsAllAction(v))
    },
    handleLinkClickJob(v) {
      dispatch(clickItemsAllAction(v))
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Tab)
