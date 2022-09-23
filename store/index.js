import { applyMiddleware, combineReducers, compose, configureStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { config } from './ducks'

const composeEnhancer = process?.env?.NODE_ENV.match(/develop/gi) ? composeWithDevTools : compose

const reducer = combineReducers({
  config
})

const store = configureStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
