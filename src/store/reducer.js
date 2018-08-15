import { 
  INIT_ITEMS_ALL,
  TITLE_CLICK,
  GET_DETAILS,
  TEST_TOKEN,
  CHANGE_INFO,
  EMPTY_INFO,
  GET_USER_DATA
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
  dtReplies: [],
  reviewLoaded: true,
  testLogin: false,
  isLogin: false,
  toastInfo: '',
  userId: '',
  userName: '',
  userAvtUrl: '',
  recentReplies: [],
  recentTopics: []
}

export default (state=defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case INIT_ITEMS_ALL:
      newState.articleLists = action.data.data
      newState.hasBottom = action.tab
      newState.isLoading = false
      return newState
    case TITLE_CLICK:
      newState.content = action.data
      newState.reviewLoaded = false
      return newState
    case GET_DETAILS:
      newState.dtActId = action.data.id
      newState.dtContent = action.data.content
      newState.dtTitle = action.data.title
      newState.dtAuthorName = action.data.author.loginname
      newState.dtCreateTime = action.data.create_at
      newState.dtReplies = action.data.replies
      newState.dtVisitCount = action.data.visit_count
      newState.reviewLoaded = true
      return newState
    case TEST_TOKEN:
      console.log(action.data)
      newState.isLogin = action.data.success
      newState.userId = action.data.id
      newState.userName = action.data.loginname
      window.localStorage.setItem('username', action.data.loginname)
      return newState
    case CHANGE_INFO:
      newState.toastInfo = action.data
      return newState
    case EMPTY_INFO:
      newState.toastInfo = ''
      return newState
    case GET_USER_DATA:
      newState.userAvtUrl = action.data.avatar_url
      newState.recentReplies = action.data.recent_replies
      newState.recentTopics = action.data.recent_topics
      return newState
    default:
      newState.isLoading = true
      return newState
  }
}