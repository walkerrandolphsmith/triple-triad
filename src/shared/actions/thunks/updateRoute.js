import { pushPath } from 'redux-simple-router';
import { setHands } from './setHands';
import { newGame } from './newGame';

export const updateRoute = () => (dispatch, getState) => {
    const state = getState();

    let randomHand = state.settings.get('randomHand');

    let nextRoute;
    switch(state.routing.path){
        case '/':
            dispatch(setHands());
            nextRoute = randomHand ? '/round' : '/card-selection';
            break;
        case '/card-selection':
            nextRoute = '/round';
            break;
        case '/round':
            nextRoute = '/game-over';
            break;
        case '/game-over':
            dispatch(newGame());
            nextRoute = '/';
            break;
    }
    dispatch(pushPath(nextRoute));
};
