import { deleteGameRequest, deleteGameSuccess, deleteGameFailure } from './../index';

export const deleteGame = id => (dispatch, getState) => {
    dispatch(deleteGameRequest());

    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('games').child(id).remove(() => {
        dispatch(deleteGameSuccess(id));
    });
};