import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { config } from './ducks'

const composeEnhancer = process?.env?.NODE_ENV.match(/develop/gi) ? composeWithDevTools : compose

const reducer = combineReducers({
  config
})

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
