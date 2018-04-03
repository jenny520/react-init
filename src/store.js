import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// import {fromJS} from 'immutable'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

const middlewares = [
    thunk,
    promiseMiddleware
]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
}

function configureStore (initialState = {}) {
    const enhancer = applyMiddleware(...middlewares)
    const store = createStore(reducers(), initialState, composeWithDevTools(enhancer))

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('./reducers').default)
        })
    }

    return store
}

export default configureStore