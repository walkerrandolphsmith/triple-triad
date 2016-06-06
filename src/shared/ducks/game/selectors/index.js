import { createSelector } from 'reselect';

import { getAvailableDeck } from './../../../utils/getAvailableDeck';
import { getBoard } from './../../../utils/getBoard';
import { getHand } from './../../../utils/getHand';
import { getIsFullHand } from './../../../utils/getIsFullHand';
import { getScore } from './../../../utils/getScore';
import { getScoreForOwner } from './../../../utils/getScoreForOwner';
import { getValidPieces } from './../../../utils/getValidPieces';
import { getWinner } from './../../../utils/getWinner';

export const loggedInPlayerSelector = state => state.auth.get('user').id;


export const currentGameSelector = state => state.game.get('games').find(game => game.id === state.game.get('gameRoute'));

export const gameOwnerSelector = createSelector(
    [currentGameSelector],
    game => game.owner
);

export const gameOpponentSelector = createSelector(
    [currentGameSelector],
    game => game.opponent
);

export const otherPlayerSelector = createSelector(
    [currentGameSelector, loggedInPlayerSelector],
    (game, id) => game.owner === id ? game.opponent : game.owner
);

export const deckSelector = createSelector(
    [currentGameSelector],
    game => game.deck
);

export const availableDeckSelector = createSelector(
    [deckSelector, otherPlayerSelector],
    getAvailableDeck
);

export const boardSelector = createSelector(
    [deckSelector],
    getBoard
);

export const handSelector = createSelector(
    [deckSelector, loggedInPlayerSelector],
    getHand
);

export const opponentHandSelector = createSelector(
    [deckSelector, gameOpponentSelector],
    getHand
);

const blueScoreSelector = createSelector(
    [deckSelector, gameOwnerSelector],
    getScoreForOwner
);

const redScoreSelector = createSelector(
    [deckSelector, gameOpponentSelector],
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