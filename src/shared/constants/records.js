import { Record } from 'immutable';
import PHASE from './phases';
import CARD_TYPES from './cardTypes';

export const RankRecord = new Record({ left: -1, top: -1, right: -1, bottom: -1 });

export const CardRecord = new Record({
    id: -1,
    name: -1,
    rank: new RankRecord(),
    level: -1,
    element: -1,
    boardIndex: -1,
    owner: -1
});

const DECK = CARD_TYPES
    .concat(CARD_TYPES)
    .map((card, index) => new CardRecord({
        id: index,
        name: card.name,
        rank: new RankRecord(card.rank),
        level: card.level,
        element: card.element,
        boardIndex: -1,
        owner: 0
    }));

export const GameRecord = new Record({
    id: -1,
    userId: -1,
    owner: -1,
    opponent: 'AI',
    currentPlayer: -1,
    accepted: false,
    deck: DECK,
    phase: PHASE.SETTINGS_SELECTION,
    selectedCard: -1,
    selectedPiece: -1,
    currentPlayerMessage: ''
});