import { pushPath } from 'redux-simple-router';
import { newGame } from './newGame';

export const updateRoute = (currentRoute) => (dispatch, getState) => {
    const state = getState();

    let randomHand = state.settings.get('randomHand');

    switch(currentRoute){
        case 'settings-selection':
            randomHand ? dispatch(pushPath('/round')) : dispatch(pushPath('/card-selection'));
            break;
        case 'card-selection':
            dispatch(pushPath('/round'));
            break;
        case 'round':
            dispatch(pushPath('/game-over'));
            break;
        case 'game-over':
            dispatch(newGame());
            dispatch(pushPath('/'));
            break;
    }
};
