import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import yahooReducer from './reducers/yahooReducer.js'
import thunk from 'redux-thunk'
import providersReducer from './reducers/providersReducer.js'


const reducer = combineReducers({
    yahooReducer,
    providersReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;