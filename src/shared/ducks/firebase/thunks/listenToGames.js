import { getGamesSuccess } from './../../game/actions/getGamesSuccess';

export const listenToGames = () => (dispatch, getState) => {
    getState()
        .firebase
        .get('ref')
        .child('games')
        .on('value', snapshot => {
            const games = snapshot.val();
            const loggedInUser = getState().auth.get('user').id;
            let list = [];
            for(var gameId in games) {
                let game = games[gameId];
                game.id = gameId;
                if(game.owner === loggedInUser || game.opponent === loggedInUser) {
                    list.push(game);
                }
            }
            dispatch(getGamesSuccess(list));
        });
};