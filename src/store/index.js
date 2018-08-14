import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const saga = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(saga))

saga.run(mySaga)

export default store