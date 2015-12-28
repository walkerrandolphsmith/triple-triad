import { createSelector } from 'reselect';

import { getHand } from './handSelector';
import { getBlueScore, getRedScore, getScore } from './scoreSelector';
import { getStepComplete } from './stepCompleteSelector';
import { getWinner } from './winnerSelector';
import { getValidPieces } from './validPiecesSelector';


const deckSelector = state => state.deck
const playerSelector = state => state.player
const opponentSelector = state => state.opponent
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
    [handSelector, boardSelector],
    getBlueScore
);

const redScoreSelector = createSelector(
    [opponentHandSelector, boardSelector],
    getRedScore
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