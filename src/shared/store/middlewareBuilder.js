import { applyMiddleware } from 'redux';
import DevTools from './../../dev-tools/devTools';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import socketMiddleware from './../middleware/socketMiddleware';
import promiseMiddleware from './../middleware/promiseMiddleware';
import env from './../../shared/config/environment';

export default function middlewareBuilder(history, socket) {
    let middleware = applyMiddleware(
        thunk,
        promiseMiddleware,
        routerMiddleware(history),
        socketMiddleware(socket)
    );
    let composeElms = [];

    if(env.isBrowser) {
        if(env.nodeEnv !== 'production') {
            composeElms = [
                middleware,
                DevTools.instrument()
            ];
        } else {
            composeElms = [
                middleware
            ];
        }
    } else {
        composeElms = [middleware];
    }

    return composeElms;
}