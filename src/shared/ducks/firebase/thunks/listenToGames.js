import diff from 'immutablediff';
import { fromJS } from 'immutable';
import { currentGameSelector } from './../../game';

import { getGameSuccess } from './../../game/actions/getGameSuccess';

export const listenToGames = () => (dispatch, getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('games').on('value', snapshot => {
        let games = snapshot.val();
        if(games) {
            Object.keys(games).forEach((key) => {
                firebaseRef.child('games').child(key).on('value', snapshot => {
                    let game = snapshot.val();
                    game.id = key;
                    const immutableGame = fromJS(game);
                    const index = getState().game.get('games').findIndex(game => game.get('id') === key);
                    if(index >= 0) {
                        const localGame = getState().game.get('games').get(index);
                        const diffs = diff(immutableGame, localGame);
                        console.log("----------------------SNAPSHOT----------------------");
                        console.log(diffs);
                        if(diffs.size >= 0) {
                            let ddddddd = diffs.toJS();
                            debugger;
                            dispatch(getGameSuccess(game));
                        }
                    } else {
                        dispatch(getGameSuccess(game));
                    }
                });
            });
        }
    });
};