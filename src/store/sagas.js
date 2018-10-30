import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import { 
  ITEM_CLICK_ALL,
  TITLE_CLICK,
  LOG_BTN_CLICK,
  LOAD_USER,
  ADD_REPLIES,
  LOAD_MORE
} from './actionTypes'
import { 
  initItemsAllAction, 
  getAtcDetailsAction, 
  testTokenAction, 
  displayInfo, 
  getUserDataAction,
  sendRepliesAction,
  getMoreDataAction
} from './actionCreators'

// 加载更多数据时默认请求第2页
let page = 2

function* getItemsAll(act) {
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/topics?tab=${act.tab}&page=1&limit=40`)
    yield put(initItemsAllAction(res.data, act.tab))
    yield page = 2      // 当列表所有数据被重新加载时，将page恢复为默认值2
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getDetails(act) {
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/topic/${act.id}`)
    yield put(getAtcDetailsAction(res.data.data))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* logIn(act) {
  try {
    const res = yield axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: act.value})
    window.localStorage.setItem('accesstoken', act.value)
    yield put(testTokenAction(res.data))
  } catch(e) {
    yield put(displayInfo('accesstoken 验证未通过'))
  }
}

function* getUserData(act) {
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/user/${act.name}`)
    yield put(getUserDataAction(res.data.data))
  } catch(e) {
    yield put(displayInfo('获取用户数据失败'))
  }
}

function* addReplies(act) {
  try {
    const content = act.data
    const id = act.id
    const token = window.localStorage.getItem('accesstoken')
    const res = yield axios.post(`https://cnodejs.org/api/v1/topic/${id}/replies`, {
      accesstoken: token,
      content
    })
    yield put(sendRepliesAction(res.data.data))
  } catch(e) {
    yield put(displayInfo('评论失败'))
  }
}

function* getMoreData(act) {
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/topics?tab=${act.tab}&page=${page}&limit=40`)
    yield put(getMoreDataAction(res.data.data))
    yield page += 1     // 获取更多数据时，每次请求成功之后，page累加
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* mySaga() {
  yield takeEvery(ITEM_CLICK_ALL, getItemsAll)
  yield takeEvery(TITLE_CLICK, getDetails)
  yield takeEvery(LOG_BTN_CLICK, logIn)
  yield takeEvery(LOAD_USER, getUserData)
  yield takeEvery(ADD_REPLIES, addReplies)
  yield takeEvery(LOAD_MORE, getMoreData)
}

export default mySaga
