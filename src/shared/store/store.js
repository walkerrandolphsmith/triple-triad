import { createStore, compose } from 'redux';
import middlewareBuilder from './middlewareBuilder';
import rootReducer from '../ducks';

export default function configureStore({ initialState, history }) {
    const createStoreWithMiddleware = compose(...middlewareBuilder(history))(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if(module.hot) {
        module.hot.accept('../ducks', () => {
            const nextReducer = require('../ducks').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
