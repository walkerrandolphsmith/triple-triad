import { resetStep, resetGame, resetSettings } from './../action-creators';

export const newGame = () => (dispatch, getState) => {
    dispatch(resetStep());
    dispatch(resetGame());
    dispatch(resetSettings());
};
