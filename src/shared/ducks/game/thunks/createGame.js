import deck from './../../../constants/deck';
import PHASES from './../../../constants/phases';
import { createGameRequest, createGameSuccess, createGameFailure } from './../index';

export function createGame() {
    return (dipatch, getState) => {
        dipatch(createGameRequest());
        const state = getState();
        const ownerId = state.auth.get('user').get('id');

        const game = {
            userId: ownerId,
            deck: deck.toJS(),
            phase: PHASES.SETTINGS_SELECTION,
            owner: ownerId,
            currentPlayer: ownerId,
            accepted: false,
            selectedCard: -1,
            selectedPiece: -1
        };

        const firebaseRef = getState().firebase.get('ref');
        firebaseRef.child('games').push(game).then((reject, resolve) => {
            dipatch(createGameSuccess(game));
        });
    };
}