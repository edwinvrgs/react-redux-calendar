import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import logger
                                                                  from 'redux-logger'
import * as reducers                                              from './ducks'

const configureStore = (preloadedState) => {
  const middlewares = [logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const rootReducer = combineReducers(reducers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./ducks', () => store.replaceReducer(rootReducer))
  }

  return store
}

export default configureStore
