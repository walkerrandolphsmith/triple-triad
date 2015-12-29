import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import DevTools from './../../../server/devtools';

let createStoreWithMiddleware
if (process.env.NODE_ENV !== 'production') {
    createStoreWithMiddleware = compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )(createStore);
}else {
    createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
