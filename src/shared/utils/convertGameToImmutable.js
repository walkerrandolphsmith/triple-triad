import { List } from 'immutable';
import { GameRecord, CardRecord, RankRecord } from './../constants/records';

export const convertGame = game => {
    const cards = game.deck.map(card => new CardRecord({
        id: card.id,
        boardIndex: card.boardIndex,
        owner: card.owner,
        rank: new RankRecord(card.rank),
        name: card.name,
        level: card.level,
        element: card.element
    }));
    
    return new GameRecord({
        id: game.id,
        owner: game.owner,
        opponent: game.opponent,
        deck: new List(cards),
        phase: game.phase,
        accepted: game.accepted,
        currentPlayer: game.currentPlayer,
        currentPlayerMessage: game.currentPlayerMessage,
        selectedCard: game.selectedCard,
        selectedPiece: game.selectedPiece
    });
};