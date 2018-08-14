import { 
  INIT_ITEMS_ALL,
  TITLE_CLICK,
  GET_DETAILS
} from './actionTypes'

const defaultState = {
  articleLists: [],
  hasBottom: '',
  isLoading: false,
  dtActId: '',
  dtContent: '',
  dtTitle: '',
  dtAuthorName: '',
  dtCreateTime: '',
  dtVisitCount: '',
  dtReplies: []
}

export default (state=defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case INIT_ITEMS_ALL:
      newState.articleLists = action.data.data
      newState.hasBottom = action.tab
      newState.isLoading = false
      console.log(newState.isLoading, 'INIT_ITEMS_ALL')
      return newState
    case TITLE_CLICK:
      newState.content = action.data
      console.log(newState.content, 555)
      return newState
    case GET_DETAILS:
      newState.dtActId = action.data.id
      newState.dtContent = action.data.content
      newState.dtTitle = action.data.title
      newState.dtAuthorName = action.data.author.loginname
      newState.dtCreateTime = action.data.create_at
      newState.dtReplies = action.data.replies
      newState.dtVisitCount = action.data.visit_count
      return newState
    default:
      newState.isLoading = true
      console.log(newState.isLoading, "default")
      return newState
  }
}