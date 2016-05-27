import { currentGameSelector } from './../shared/ducks/game';

export const observeStore = (store, select, onChange) => {
    let currentState;
    const handleChange = () => {
        const state = store.getState();
        let changeShouldOccur = false;

        const firebaseRef = state.firebase.get('ref');
        const clientAuthenticatedUser = state.auth.get('user').get('id');
        const currentGame = currentGameSelector(state);
        if(!currentGame) return;
        firebaseRef.child('games').child(currentGame.get('id')).once('value', snapshot => {
            let firebaseGameState = snapshot.val();
            const isTwoPlayerAndMyTurn = firebaseGameState.accepted && firebaseGameState.currentPlayer === clientAuthenticatedUser;
            const stateChanged = currentState !== currentGame;
            if((isTwoPlayerAndMyTurn && stateChanged) || (!firebaseGameState.accepted && stateChanged)) {
                changeShouldOccur = true;
            }
        });

        if (changeShouldOccur) {
            currentState = currentGame;
            onChange(currentGame, firebaseRef);
        }
    };

    return store.subscribe(handleChange);
};

export const onChange = (game, ref) => {
    const g = game.toJS();
    ref.child('games').child(game.get('id')).update(g);
};

export const select = state => state.game.get('games');