import { getGameRequest, getGameSuccess, getGameFailure } from './../index';

export const getGame = id => (dispatch, getState) => {
    dispatch(getGameRequest());
    getState()
        .firebase
        .get('ref')
        .child('games')
        .child(id)
        .on('value', snapshot => {
            let game = snapshot.val();
            game.id = id;
            dispatch(getGameSuccess(game));
        });
};