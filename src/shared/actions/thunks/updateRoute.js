import { pushPath } from 'redux-simple-router';
import { setHands } from './setHands';
import { getNextSelectedCard } from './getNextSelectedCard';
import { newGame } from './newGame';

export const updateRoute = () => (dispatch, getState) => {
    const state = getState();

    let randomHand = state.settings.get('randomHand');
    //let isHandSelected = state.game.get('deck').filter(card => card.get('owner') === 1).size === 5;

    let nextRoute;
    switch(state.routing.path){
        case '/':
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
    if(nextRoute === '/round') {
        dispatch(setHands());
        dispatch(getNextSelectedCard());
    }
    dispatch(pushPath(nextRoute));
};
