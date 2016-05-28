import { getGamesRequest, getGamesSuccess, getGamesFailure } from './../index';

export function getGames() {
    return (dipatch, getState) => {
        dipatch(getGamesRequest());
        const state = getState();
        const ownerId = state.auth.get('user').id;

        const firebaseRef = getState().firebase.get('ref');
        firebaseRef.child('games').on('value', snapshot => {
            let games = snapshot.val();
            let gamesArray = [];
            Object.keys(games).forEach(key => {
                games[key].id = key;
                gamesArray.push(games[key]);
            });
            gamesArray = gamesArray.filter(game => ownerIsRelatedToGame(game, ownerId));
            dipatch(getGamesSuccess(gamesArray));
        });
    };
}

const ownerIsRelatedToGame = (game, owner) => game.owner === owner || game.opponent === owner;