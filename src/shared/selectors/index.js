import { createSelector } from 'reselect';

import { getAvailableDeck } from './availableDeck/availableDeckSelector';
import { getBoard } from './board/boardSelector';
import { getHand } from './hand/handSelector';
import { getScoreForOwner, getScore } from './score/scoreSelector';
import { getIsFullHand } from './isFullHand/isFullHandSelector';
import { getWinner } from './winner/winnerSelector';
import { getValidPieces } from './validPieces/validPiecesSelector';


const deckSelector = state => state.get('deck');
const playerSelector = state => 1;
const opponentSelector = state => 2;
const unownedSelector = state => 0;

export const availableDeckSelector = createSelector(
    [deckSelector, opponentSelector],
    getAvailableDeck
);

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

export const isFullHandSelector = createSelector(
    [handSelector],
    getIsFullHand
);