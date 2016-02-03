import { pushPath } from 'redux-simple-router';
import { setHands } from './setHands';
import { getNextSelectedCard } from './getNextSelectedCard';
import { getNextCardForHand } from './getNextCardForHand';
import { setPhase, resetGame } from './../action-creators';

export const updateRoute = () => (dispatch, getState) => {

    const state = getState();

    let randomHand = state.settings.get('randomHand');

    let nextRoute;
    switch(state.routing.path){
        case '/settings-selection':
            nextRoute = '/invite';
            break;
        case '/invite':
            nextRoute = randomHand ? '/round' : '/card-selection';
            break;
        case '/card-selection':
            nextRoute = '/round';
            break;
        case '/round':
            dispatch(resetGame());
            nextRoute = '/settings-selection';
            break;
    }

    if(nextRoute === '/card-selection'){
        dispatch(setPhase('handSelection'));
        dispatch(getNextCardForHand());
    }

    if(nextRoute === '/round') {
        dispatch(setPhase('cardSelection'));
        dispatch(setHands());
        dispatch(getNextSelectedCard());
    }
    dispatch(pushPath(nextRoute));
};
