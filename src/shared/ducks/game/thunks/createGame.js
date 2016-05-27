import { GameRecord } from './../../../constants/records';

export const createGame = () => (dipatch, getState) => {
    const ownerId = getState().auth.get('user').get('id');

    const game = new GameRecord({
        userId: ownerId,
        owner: ownerId,
        currentPlayer: ownerId
    });

    let serializedGame = game.toJS();
    serializedGame.deck = serializedGame.deck.map(card => card.toJS());

    getState()
        .firebase
        .get('ref')
        .child('games')
        .push(serializedGame);
};
