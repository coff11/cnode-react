import { takeEvery, put} from 'redux-saga/effects'
import { 
  ITEM_CLICK_ALL, 
  ITEM_CLICK_GOOD, 
  ITEM_CLICK_SHARE, 
  ITEM_CLICK_ASK,
  ITEM_CLICK_JOB,
  TITLE_CLICK
} from './actionTypes'
import { initItemsAllAction, getAtcDetails } from './actionCreators'
import axios from 'axios'

function* getItemsAll() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics')
    yield put(initItemsAllAction(res.data, 'all'))
  } catch(e) {

  }
}

function* getItemsGood() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=good')
    yield put(initItemsAllAction(res.data, 'good'))
  } catch(e) {

  }
}

function* getItemsShare() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=share')
    yield put(initItemsAllAction(res.data, 'share'))
  } catch(e) {

  }
}

function* getItemsAsk() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=ask')
    yield put(initItemsAllAction(res.data, 'ask'))
  } catch(e) {

  }
}

function* getItemsJob() {
  try {
    const res = yield axios.get('https://cnodejs.org/api/v1/topics?tab=job')
    yield put(initItemsAllAction(res.data, 'job'))
  } catch(e) {

  }
}

function* getDetails(act) {
  console.log(act)
  try {
    const res = yield axios.get(`https://cnodejs.org/api/v1/topic/${act.id}`)
      console.log(res, 111)
    yield put(getAtcDetails(res.data.data))
  } catch(e) {

  }
}

function* mySaga() {
  yield takeEvery(ITEM_CLICK_ALL, getItemsAll)
  yield takeEvery(ITEM_CLICK_GOOD, getItemsGood)
  yield takeEvery(ITEM_CLICK_SHARE, getItemsShare)
  yield takeEvery(ITEM_CLICK_ASK, getItemsAsk)
  yield takeEvery(ITEM_CLICK_JOB, getItemsJob)
  yield takeEvery(TITLE_CLICK, getDetails)
}

export default mySaga