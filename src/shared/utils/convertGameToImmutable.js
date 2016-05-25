import { Map, List } from 'immutable';

export const convertGame = game => {
    const cards = game.deck.map(c => { const rank = new Map(c.rank); c.rank = rank; return new Map(c); });
    const deck = new List(cards);

    return new Map({
        'id': id,
        'owner': game.owner,
        'opponent': game.opponent,
        'deck': deck,
        'phase': game.phase,
        'accepted': game.accepted,
        'currentPlayer': game.currentPlayer,
        'selectedCard': game.selectedCard,
        'selectedPiece': game.selectedPiece
    });
};