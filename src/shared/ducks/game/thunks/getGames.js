import { getGamesRequest, getGamesSuccess, getGamesFailure } from './../index';

export function getGames() {
    return (dipatch, getState) => {
        dipatch(getGamesRequest());
        const state = getState();
        const ownerId = state.auth.get('user').get('id');

        const firebaseRef = getState().firebase.get('ref');
        firebaseRef.child('games').on('value', snapshot => {
            let games = snapshot.val();
            let gamesArray = [];
            Object.keys(games).forEach(key => {
                games[key].id = key;
                gamesArray.push(games[key]);
            });
            gamesArray = gamesArray.filter(game => game.owner === ownerId);
            dipatch(getGamesSuccess(gamesArray));
        });
    };
}