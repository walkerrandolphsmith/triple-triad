import { applyMiddleware } from 'redux'
import DevTools from './../../dev-tools/devTools';
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promiseMiddleware';

export default function middlewareBuilder() {
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