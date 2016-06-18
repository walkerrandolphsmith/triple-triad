import { List, Record } from 'immutable';
import PHASE from './../../../constants/phases';
import CARD_TYPES from './../../../constants/cardTypes';

export const RankRecord = new Record({ left: -1, top: -1, right: -1, bottom: -1 });

export const CardRecord = new Record({
    id: -1,
    name: -1,
    rank: new RankRecord(),
    level: -1,
    element: -1,
    boardIndex: -1,
    owner: -1,
    flipDirection: ''
});

const DECK = CARD_TYPES
    .concat(CARD_TYPES)
    .map((card, index) => new CardRecord({
        id: index,
        name: card.name,
        rank: new RankRecord(card.rank),
        level: card.level,
        element: card.element,
        owner: 0
    }));

export const SettingsRecord = new Record({
    randomHand: false,
    multiplayer: false,
    visibleHand: false,
    focused: -1
});

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
    currentPlayerMessage: '',
    settings: new SettingsRecord()
});

export const convertToGameRecord = game => {
    const cards = game.deck.map(card => new CardRecord({
        id: card.id,
        boardIndex: card.boardIndex,
        owner: card.owner,
        rank: new RankRecord(card.rank),
        name: card.name,
        level: card.level,
        element: card.element,
        flipDirection: card.flipDirection
    }));

    const settings = new SettingsRecord(game.settings);

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
        selectedPiece: game.selectedPiece,
        settings: settings
    });
};