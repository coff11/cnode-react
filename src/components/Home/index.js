import React, { Component, Fragment } from 'react'
import { ListWrapper, Spiner } from './style'
import ListItem from '../ListItem'
import { connect } from 'react-redux'
import Tab from '../Tab'

class Lists extends Component {
  render() {
    return (
      <Fragment>
        <Tab />
        <ListWrapper>
          <ul>
            {this.props.isLoading? <Spiner></Spiner> : this.props.arr.map((item, index) => {
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
          </ul>
        </ListWrapper>
      </Fragment>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    arr: state.articleLists,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)