import { getNextSelectedCard } from './getNextSelectedCard';

export const handleUp = () => (dispatch, getState) => {
    console.log('UP');
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){

    }else{
        dispatch(getNextSelectedCard(4));
    }
};