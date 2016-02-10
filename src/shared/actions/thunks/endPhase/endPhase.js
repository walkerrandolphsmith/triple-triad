import { setHands } from './../setHands/setHands';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { setPhase, resetGame } from './../../action-creators';
import { getNextPhase } from './../../utils/getNextPhase/getNextPhase';

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


