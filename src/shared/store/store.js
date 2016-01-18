import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promiseMiddleware';
import rootReducer from '../reducers'
import DevTools from './../../dev-tools/devTools';

const buildMiddleware = () => {
    let middleware = applyMiddleware(thunk, promiseMiddleware);
    let composeElms = [];

    if(process.browser){
        if(process.env.NODE_ENV !== 'production'){
            composeElms = [
                middleware,
                DevTools.instrument()
            ]
        }else{
            composeElms = [
                middleware
            ]
        }

    }else{
        composeElms = [middleware];
    }

    return composeElms;
};

export default function configureStore(initialState) {

    const createStoreWithMiddleware = compose(...buildMiddleware())(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
