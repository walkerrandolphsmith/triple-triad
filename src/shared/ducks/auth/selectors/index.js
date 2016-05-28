import { createSelector } from 'reselect';

import { getGamesAssociatedWithMe } from './../../../utils/getGamesAssociatedWithMe';
import { getBoard } from './../../../utils/getBoard';
import { getScore } from './../../../utils/getScore';
import { getScoreForOwner } from './../../../utils/getScoreForOwner';
import { getValidPieces } from './../../../utils/getValidPieces';
import { getWinner } from './../../../utils/getWinner';
import WINNER from './../../../constants/winner';

export const meSelector = state => state.auth.get('user').id;
export const gamesSelector = state => state.game.get('games');

export const getGamesAssociatedWithMeSelector = createSelector(
    [meSelector, gamesSelector],
    (id, games) => getGamesAssociatedWithMe(id, games)
);

export const getScoresSelector = createSelector(
    [meSelector, getGamesAssociatedWithMeSelector],
    (id, games) => {
       const scores = games.map(game => {
            const isOwner = game.owner === id;
            const deck = game.deck;
            const board = getBoard(deck);
            const blue = getScoreForOwner(deck, 1);
            const red = getScoreForOwner(deck, 2);
            const score = getScore(blue, red);
            const validPieces = getValidPieces(board);
            const winner = getWinner(score,validPieces);
            return { isOwner: isOwner, winner: winner };
        });

        const defaultWinLossTieTally = { wins: 0, loses: 0, ties: 0 };
        return scores.reduce((tally, score) => {
            const { isOwner, winner } = score;
            if(isOwner) {
                if(winner === WINNER.BLUE) {
                    tally.wins++;
                }else if(winner === WINNER.RED) {
                    tally.loses++;
                }   
            } else {
                if(winner === WINNER.BLUE) {
                    tally.loses++;
                }else if(winner === WINNER.RED) {
                    tally.wins++;
                }
            }
            if(winner === WINNER.TIE) {
                tally.ties++
            }
            
            return tally;
        }, defaultWinLossTieTally);
    }
);