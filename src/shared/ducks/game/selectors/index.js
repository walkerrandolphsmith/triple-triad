import { createSelector } from 'reselect';

import { getAvailableDeck } from './../../../utils/getAvailableDeck';
import { getBoard } from './../../../utils/getBoard';
import { getHand } from './../../../utils/getHand';
import { getIsFullHand } from './../../../utils/getIsFullHand';
import { getScore } from './../../../utils/getScore';
import { getScoreForOwner } from './../../../utils/getScoreForOwner';
import { getValidPieces } from './../../../utils/getValidPieces';
import { getWinner } from './../../../utils/getWinner';

const playerSelector = () => 1;
const opponentSelector = () => 2;

export const currentGameSelector = state => state.game.get('games').find(game => game.get('id') === state.game.get('gameRoute'));

export const deckSelector = createSelector(
    [currentGameSelector],
    game => game.get('deck')
);

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