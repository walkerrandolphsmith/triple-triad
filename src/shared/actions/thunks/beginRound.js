import { nextStep } from './../action-creators';
import { getNextSelectedCard } from './getNextSelectedCard';

export const beginRound = () => (dispatch, getState) => {
    dispatch(getNextSelectedCard());
};