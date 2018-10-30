import { 
  ITEM_CLICK_ALL, 
  INIT_ITEMS_ALL,
  TITLE_CLICK,
  GET_DETAILS,
  LOG_BTN_CLICK,
  TEST_TOKEN,
  CHANGE_INFO,
  EMPTY_INFO,
  LOAD_USER,
  GET_USER_DATA,
  ADD_REPLIES,
  SEND_REPLIES,
  LOAD_MORE,
  GET_MORE_DATA
} from './actionTypes'

export const clickItemsAllAction = (value) => {
  return {
    type: ITEM_CLICK_ALL,
    tab: value
  }
}

export const initItemsAllAction = (data, tab) => {
  return {
    type: INIT_ITEMS_ALL,
    tab,
    data
  }
}

export const clickTitleAction = (id) => {
  return {
    type: TITLE_CLICK,
    id
  }
}

export const getAtcDetailsAction = (data) => {
  return {
    type: GET_DETAILS,
    data
  }
}

export const clickLogBtnAction = (value) => {
  return {
    type: LOG_BTN_CLICK,
    value
  }
}

export const testTokenAction = (data) => {
  return {
    type: TEST_TOKEN,
    data
  }
}

export const displayInfo = (data) => {
  return {
    type: CHANGE_INFO,
    data
  }
}

export const emptyInfoAction = () => {
  return {
    type: EMPTY_INFO
  }
}

export const loadUserDataAction = (name) => {
  return {
    type: LOAD_USER,
    name
  }
}

export const getUserDataAction = (data) => {
  return {
    type: GET_USER_DATA,
    data
  }
}

export const addRepliesAction = (data, id) => {
  return {
    type: ADD_REPLIES,
    data,
    id
  }
}

export const sendRepliesAction = (data) => {
  return {
    type: SEND_REPLIES,
    data
  }
}

export const loadMoreData = (tab) => {
  return {
    type: LOAD_MORE,
    tab
  }
}

export const getMoreDataAction = (res) => {
  return {
    type: GET_MORE_DATA,
    res
  }
}
