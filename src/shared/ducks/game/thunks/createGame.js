import deck from './../../../constants/deck';
import PHASES from './../../../constants/phases';

export const createGame = () => (dipatch, getState) => {
    const state = getState();
    const ownerId = state.auth.get('user').get('id');
    const game = {
        userId: ownerId,
        deck: deck.toJS(),
        phase: PHASES.SETTINGS_SELECTION,
        owner: ownerId,
        opponent: 'AI',
        currentPlayer: ownerId,
        accepted: false,
        selectedCard: -1,
        selectedPiece: -1
    };

    getState()
        .firebase
        .get('ref')
        .child('games')
        .push(game);
};
