import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <div>
            <ul>
              <li>
                <Link to='/' 
                  onClick={this.props.handleLinkClickAll} 
                  className={this.props.tab === 'all'? ' pink-bottom' : ' '}
                >全部</Link>
                <Link to='/' 
                  onClick={this.props.handleLinkClickGood}
                  className={this.props.tab === 'good'? ' pink-bottom' : ' '}
                >精华</Link>
                <Link to='/'
                  onClick={this.props.handleLinkClickShare}
                  className={this.props.tab === 'share'? ' pink-bottom' : ' '}
                >分享</Link>
                <Link to='/'
                  onClick={this.props.handleLinkClickAsk}
                  className={this.props.tab === 'ask'? ' pink-bottom' : ' '}
                >问答</Link>
                <Link to='/'
                  onClick={this.props.handleLinkClickJob}
                  className={this.props.tab === 'job'? ' pink-bottom' : ' '}                
                >招聘</Link>
              </li>
            </ul>
          </div>
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