import { getGameSuccess } from './../../game/actions/getGameSuccess';
import { currentGameSelector } from './../../game';

export const listenToGames = () => (dispatch, getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('games').on('value', snapshot => {
        let games = snapshot.val();
        if(games) {
            const gameIds = Object.keys(games);
            if(gameIds.length > 0) {
                gameIds.forEach(gameId => {
                    let knownGames = getState().game.get('games').map(game => game.get('id'));
                    let gameIsInLocalState = knownGames.find(id => id === gameId);
                    let currentGame = currentGameSelector(getState());
                    let authenticatedUser = getState().auth.get('user').get('id');

                    if(shouldUpdateGame(gameId, currentGame, authenticatedUser, gameIsInLocalState)) {
                        firebaseRef.child('games').child(gameId).once('value', snapshot => {
                            let game = snapshot.val();
                            game.id = gameId;
                            dispatch(getGameSuccess(game));
                        });
                    }
                });
            }
        }
    });
};

function shouldUpdateGame(gameId, currentGame, authenticatedUserOnClient, gameIsInLocalState) {
    return (
        !currentGame
        || !gameIsInLocalState
        || (
            currentGame.get('id') === gameId
            && authenticatedUserOnClient !== currentGame.get('currentPlayer')
        )
    )
}