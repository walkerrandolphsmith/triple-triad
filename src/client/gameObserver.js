import { currentGameSelector } from './../shared/ducks/game';

export const observeStore = (store, select, onChange) => {
    let currentState;
    const handleChange = () => {
        const state = store.getState();
        const currentGame = currentGameSelector(state);
        if(!currentGame) return;

        const firebaseRef = state.firebase.get('ref');
        const stateChanged = currentState !== currentGame;
        if (stateChanged) {
            currentState = currentGame;
            onChange(currentGame, firebaseRef);
        }
    };
    return store.subscribe(handleChange);
};

export const onChange = (game, ref) => {
    let serializedGame = game.toJS();
    ref.child('games').child(game.id).update(serializedGame);
};

export const select = state => state.game.get('games');