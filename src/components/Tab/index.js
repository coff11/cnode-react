import React, { Component } from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import { TabWrapper } from './style'
import { connect } from 'react-redux'
import { 
  clickItemsAllAction, 
  clickItemsGoodAction, 
  clickItemsShareAction,
  clickItemsAskAction,
  clickItemsJobAction
} from '../../store/actionCreators'


class Tab extends Component {

  render() {
    return (
      <TabWrapper>
        <HashRouter>
          <div>
            <ul>
              <li>
                <NavLink to='/' 
                  onClick={this.props.handleLinkClickAll} 
                  className={this.props.tab === 'all'? ' pink-bottom' : ' '}
                >全部</NavLink>
                <NavLink to='/' 
                  onClick={this.props.handleLinkClickGood}
                  className={this.props.tab === 'good'? ' pink-bottom' : ' '}
                >精华</NavLink>
                <NavLink to='/'
                  onClick={this.props.handleLinkClickShare}
                  className={this.props.tab === 'share'? ' pink-bottom' : ' '}
                >分享</NavLink>
                <NavLink to='/'
                  onClick={this.props.handleLinkClickAsk}
                  className={this.props.tab === 'ask'? ' pink-bottom' : ' '}
                >问答</NavLink>
                <NavLink to='/'
                  onClick={this.props.handleLinkClickJob}
                  className={this.props.tab === 'job'? ' pink-bottom' : ' '}                
                >招聘</NavLink>
              </li>
            </ul>
          </div>
        </HashRouter>
      </TabWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    tab: state.hasBottom,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
 
    handleLinkClickAll() {
      dispatch(clickItemsAllAction())
    },
    handleLinkClickGood() {
      dispatch(clickItemsGoodAction())
    },
    handleLinkClickShare() {
      dispatch(clickItemsShareAction())
    },
    handleLinkClickAsk() {
      dispatch(clickItemsAskAction())
    },
    handleLinkClickJob() {
      dispatch(clickItemsJobAction())
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Tab)