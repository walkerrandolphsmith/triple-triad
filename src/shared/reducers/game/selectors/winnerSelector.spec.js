import expect from 'expect';
import { List } from 'immutable';
import WINNER from './../../../constants/winner';
import { getWinner } from './../index';

describe('src/shared/selectors/winnerSelector', () => {
    let score;
    let validPieces;
    describe('given a game in progress', () => {
        beforeEach(() => {
            score = { blue: 5, red: 5 };
            validPieces = new List([0]);
        });

        it('should be not have a winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.NONE);
        });
    });

    describe('given a full board with equal blue and red score', () => {
        beforeEach(() => {
            score = { blue: 5, red: 5 };
            validPieces = new List([]);
        });

        it('should be not have a winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.TIE);
        });
    });

    describe('given a full board with a blue score greater than red score', () => {
        beforeEach(() => {
            score = { blue: 6, red: 4 };
            validPieces = new List([]);
        });

        it('should be blue winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.BLUE);
        });
    });

    describe('given a full board with a blue score less than red score', () => {
        beforeEach(() => {
            score = { blue: 4, red: 6 };
            validPieces = new List([]);
        });

        it('should be blue winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.RED);
        });
    });
});