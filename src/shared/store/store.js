import { createStore, compose } from 'redux';
import middlewareBuilder from './middlewareBuilder';
import rootReducer from '../reducers';

export default function configureStore({ initialState, history, socket }) {
    const createStoreWithMiddleware = compose(...middlewareBuilder(history, socket))(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
