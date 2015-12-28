import { createSelector } from 'reselect';

import { getBlueScore, getRedScore, getScore, getValidPieces, getWinner } from './scoreSelector';
import { getStepComplete } from './stepCompleteSelector';

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