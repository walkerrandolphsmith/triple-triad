import { setHands } from './setHands';
import { getNextSelectedCard } from './getNextSelectedCard';
import { getNextCardForHand } from './getNextCardForHand';
import { setPhase, resetGame } from './../action-creators';
import { getNextPhase } from './../utils/getNextPhase';

export const endPhase = () => (dispatch, getState) => {

    const state = getState();

    let randomHand = state.settings.get('randomHand');
    let currentPhase = state.game.get('phase');

    let nextPhase = getNextPhase(currentPhase, randomHand);

    if(currentPhase === 'cardSelection' || currentPhase === 'pieceSelection'){
        dispatch(resetGame());
    }

    if(nextPhase === 'handSelection'){
        dispatch(getNextCardForHand());
    }

    if(nextPhase === 'round') {
        dispatch(setPhase('cardSelection'));
        dispatch(setHands());
        dispatch(getNextSelectedCard());
    }

    dispatch(setPhase(nextPhase));
};


