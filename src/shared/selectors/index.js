import { createSelector } from 'reselect';

import { getBlueScore, getRedScore, getScore } from './scoreSelector';
import { getStepComplete } from './stepCompleteSelector';
import { getWinner } from './winnerSelector';
import { getValidPieces } from './validPiecesSelector';

const handSelector = state => state.hand
const opponentHandSelector = state => state.opponentHand
const boardSelector = state => state.board

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