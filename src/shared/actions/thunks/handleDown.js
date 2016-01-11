import { getNextSelectedCard } from './getNextSelectedCard';

export const handleDown = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){

    }else{
        dispatch(getNextSelectedCard('down'));
    }
};