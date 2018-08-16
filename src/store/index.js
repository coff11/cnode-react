import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import mySaga from './sagas'

const saga = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(saga))

saga.run(mySaga)

export default store
