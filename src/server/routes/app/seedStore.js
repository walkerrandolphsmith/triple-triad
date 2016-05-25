import firebase from 'firebase';
import configureStore from './../../../shared/store/store';
import { getGame } from './../../../shared/ducks/game';
import { setRef } from './../../../shared/ducks/firebase/index';

export const seedStore = url => {
    const store = configureStore({
        initialState: undefined,
        history: undefined
    });

    const ref = firebase.database().ref();
    store.dispatch(setRef(ref));

    if(url.startsWith('/game/-')) {
        const gameId = url.split('/')[2];
        store.dispatch(getGame(gameId));
    }
    //Overwrite firebase ref or JSON.stringify wiill throw
    //TYPE ERROR circular dependency error
    store.dispatch(setRef(''));

    return store;
};