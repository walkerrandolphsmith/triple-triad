import { getGameSuccess } from './../../game/actions/getGameSuccess';

export const listenToGames = () => (dispatch, getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('games').on('value', snapshot => {
        let games = snapshot.val();

        Object.keys(games).forEach((key) => {
            firebaseRef.child('games').child(key).on('value', snapshot => {
                let game = snapshot.val();
                game.id = key;
                dispatch(getGameSuccess(game))
            });
        });
    });
};