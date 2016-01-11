import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers'
import { routeReducer } from 'redux-simple-router';
import { combineReducers } from 'redux';
import DevTools from './../../dev-tools/devTools';

let createStoreWithMiddleware;

if (process.env.NODE_ENV !== 'production') {
    createStoreWithMiddleware = compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )(createStore);
}else {
    createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
}

export default function configureStore(initialState) {

  const rootReducer = combineReducers(Object.assign({}, reducers, {
      routing: routeReducer
  }));

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
