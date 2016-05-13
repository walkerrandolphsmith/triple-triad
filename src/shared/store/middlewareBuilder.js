import { applyMiddleware } from 'redux';
import DevTools from './../../dev-tools/devTools';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './../middleware/promiseMiddleware';
import env from './../../shared/config/environment';

export default function middlewareBuilder(history) {
    const middleware = applyMiddleware(
        thunk,
        promiseMiddleware,
        routerMiddleware(history)
    );
    let composeElms = [middleware];

    if(env.isBrowser && env.nodeEnv !== 'production') {
        composeElms.push(
            DevTools.instrument()
        );
    }

    return composeElms;
}