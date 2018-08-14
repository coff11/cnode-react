import { 
  ITEM_CLICK_ALL, 
  INIT_ITEMS_ALL, 
  ITEM_CLICK_GOOD, 
  ITEM_CLICK_SHARE,
  ITEM_CLICK_ASK,
  ITEM_CLICK_JOB,
  TITLE_CLICK,
  GET_DETAILS
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
