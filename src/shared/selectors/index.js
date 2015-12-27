import { createSelector } from 'reselect';

import { blueScoreSelector, redScoreSelector, scoreSelector, validPiecesSelector, winnerSelector } from './scoreSelector';
import { stepCompleteSelector } from './stepCompleteSelector';

const handSelector = state => state.hand
const opponentHandSelector = state => state.opponentHand
const boardSelector = state => state.board

const blueScoreSelectorCreator = createSelector(
    [handSelector, boardSelector],
    blueScoreSelector
);

const redScoreSelectorCreator = createSelector(
    [opponentHandSelector, boardSelector],
    redScoreSelector
);

export const scoreSelectorCreator = createSelector(
    [blueScoreSelectorCreator, redScoreSelectorCreator],
    scoreSelector
);

export const validPiecesSelectorCreator = createSelector(
    [boardSelector],
    validPiecesSelector
);

export const winnerSelectorCreator = createSelector(
    [scoreSelectorCreator, validPiecesSelectorCreator],
    winnerSelector
);

export const stepCompleteSelectorCreator = createSelector(
    [handSelector],
    stepCompleteSelector
);