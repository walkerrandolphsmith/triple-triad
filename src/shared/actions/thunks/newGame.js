import { resetGame, resetSettings } from './../action-creators';

export const newGame = () => (dispatch, getState) => {
    dispatch(resetGame());
    dispatch(resetSettings());
};
