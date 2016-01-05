import expect from 'expect';
import { getWinner } from './../../../src/shared/selectors/winnerSelector';
import WINNER from './../../../src/shared/constants/winner';

describe("winner selector", () => {

    describe("given a game in progress", () => {

        let score, validPieces;
        beforeEach(() => {
            score = {blue: 5, red: 5};
            validPieces = [0];
        });

        it('should be not have a winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.NONE)
        });
    });

    describe("given a full board with equal blue and red score", () => {

        let score, validPieces;
        beforeEach(() => {
            score = {blue: 5, red: 5};
            validPieces = [];
        });

        it('should be not have a winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.TIE)
        });
    });

    describe("given a full board with a blue score greater than red score", () => {

        let score, validPieces;
        beforeEach(() => {
            score = {blue: 6, red: 4};
            validPieces = [];
        });

        it('should be blue winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.BLUE)
        });
    });

    describe("given a full board with a blue score less than red score", () => {

        let score, validPieces;
        beforeEach(() => {
            score = {blue: 4, red: 6};
            validPieces = [];
        });

        it('should be blue winner', () => {
            expect(getWinner(score, validPieces)).toEqual(WINNER.RED)
        });
    });
});