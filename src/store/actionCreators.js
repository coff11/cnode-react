import { 
  ITEM_CLICK_ALL, 
  INIT_ITEMS_ALL, 
  ITEM_CLICK_GOOD, 
  ITEM_CLICK_SHARE,
  ITEM_CLICK_ASK,
  ITEM_CLICK_JOB,
  TITLE_CLICK,
  GET_DETAILS,
  LOG_BTN_CLICK,
  TEST_TOKEN,
  CHANGE_INFO,
  EMPTY_INFO,
  LOAD_USER,
  GET_USER_DATA,
  ADD_REPLIES,
  SEND_REPLIES
} from './actionTypes'

export const clickItemsAllAction = (tab) => {
  return {
    type: ITEM_CLICK_ALL,
    tab
  }
}

export const clickItemsGoodAction = (tab) => {
  return {
    type: ITEM_CLICK_GOOD,
    tab
  }
}

export const clickItemsShareAction = (tab) => {
  return {
    type: ITEM_CLICK_SHARE,
    tab
  }
}

export const clickItemsAskAction = (tab) => {
  return {
    type: ITEM_CLICK_ASK,
    tab
  }
}

export const clickItemsJobAction = (tab) => {
  return {
    type: ITEM_CLICK_JOB,
    tab
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

export const getAtcDetails = (data) => {
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