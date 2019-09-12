import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import yahooReducer from './reducers/yahooReducer.js'

const reducer = combineReducers({
    yahooReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer)

export default store;