import { createSelector } from 'reselect';

import { getAvailableDeck } from './availableDeckSelector';
import { getCardSelected } from './cardSelectedSelector';
import { getBoard } from './boardSelector';
import { getHand } from './handSelector';
import { getScoreForOwner, getScore } from './scoreSelector';
import { getStepComplete } from './stepCompleteSelector';
import { getWinner } from './winnerSelector';
import { getValidPieces } from './validPiecesSelector';


const deckSelector = state => state.deck
const playerSelector = state => 1
const opponentSelector = state => 2
const unownedSelector = state => 0

export const cardSelectedSelector = createSelector(
    [deckSelector],
    getCardSelected
);

export const availableDeckSelector = createSelector(
    [deckSelector, opponentSelector],
    getAvailableDeck
)

export const boardSelector = createSelector(
    [deckSelector],
    getBoard
);

export const handSelector = createSelector(
    [deckSelector, playerSelector],
    getHand
);

export const opponentHandSelector = createSelector(
    [deckSelector, opponentSelector],
    getHand
);

const blueScoreSelector = createSelector(
    [deckSelector, playerSelector],
    getScoreForOwner
);

const redScoreSelector = createSelector(
    [deckSelector, opponentSelector],
    getScoreForOwner
);

export const scoreSelector = createSelector(
    [blueScoreSelector, redScoreSelector],
    getScore
);

export const validPiecesSelector = createSelector(
    [boardSelector],
    getValidPieces
);

export const winnerSelector = createSelector(
    [scoreSelector, validPiecesSelector],
    getWinner
);

export const stepCompleteSelector = createSelector(
    [handSelector],
    getStepComplete
);