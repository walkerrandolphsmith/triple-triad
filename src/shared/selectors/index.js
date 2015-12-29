import { createSelector } from 'reselect';

import { getHand } from './handSelector';
import { getScoreForOwner, getScore } from './scoreSelector';
import { getStepComplete } from './stepCompleteSelector';
import { getWinner } from './winnerSelector';
import { getValidPieces } from './validPiecesSelector';


const deckSelector = state => state.deck
const playerSelector = state => state.ownerType ? state.ownerType.player : -1
const opponentSelector = state => state.ownerType ? state.ownerType.opponent : -1
const boardSelector = state => state.board

export const handSelector = createSelector(
    [deckSelector, playerSelector],
    getHand
);

export const opponentHandSelector = createSelector(
    [deckSelector, opponentSelector],
    getHand
);

const blueScoreSelector = createSelector(
    [handSelector, boardSelector, playerSelector],
    getScoreForOwner
);

const redScoreSelector = createSelector(
    [opponentHandSelector, boardSelector, opponentSelector],
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