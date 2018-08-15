import { takeEvery, put} from 'redux-saga/effects'
import { 
  ITEM_CLICK_ALL, 
  ITEM_CLICK_GOOD, 
  ITEM_CLICK_SHARE, 
  ITEM_CLICK_ASK,
  ITEM_CLICK_JOB,
  TITLE_CLICK,
  LOG_BTN_CLICK,
  LOAD_USER,
  ADD_REPLIES
} from './actionTypes'
import { 
  initItemsAllAction, 
  getAtcDetails, 
  testTokenAction, 
  displayInfo, 
  getUserDataAction,
  sendRepliesAction
} from './actionCreators'
import axios from 'axios'

function* getItemsAll() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics')
    yield put(initItemsAllAction(res.data, 'all'))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getItemsGood() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=good')
    yield put(initItemsAllAction(res.data, 'good'))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getItemsShare() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=share')
    yield put(initItemsAllAction(res.data, 'share'))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getItemsAsk() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=ask')
    yield put(initItemsAllAction(res.data, 'ask'))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getItemsJob() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=job')
    yield put(initItemsAllAction(res.data, 'job'))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* getDetails(act) {
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/topic/${act.id}`)
    yield put(getAtcDetails(res.data.data))
  } catch(e) {
    yield put(displayInfo('获取数据失败'))
  }
}

function* logIn(act) {
  try {
    const res = yield axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: act.value})
    
    window.localStorage.setItem('accesstoken', act.value)
    console.log(res,"denglu")
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

function* mySaga() {
  yield takeEvery(ITEM_CLICK_ALL, getItemsAll)
  yield takeEvery(ITEM_CLICK_GOOD, getItemsGood)
  yield takeEvery(ITEM_CLICK_SHARE, getItemsShare)
  yield takeEvery(ITEM_CLICK_ASK, getItemsAsk)
  yield takeEvery(ITEM_CLICK_JOB, getItemsJob)
  yield takeEvery(TITLE_CLICK, getDetails)
  yield takeEvery(LOG_BTN_CLICK, logIn)
  yield takeEvery(LOAD_USER, getUserData)
  yield takeEvery(ADD_REPLIES, addReplies)

}

export default mySaga