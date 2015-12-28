import expect from 'expect';
import { blueScoreSelector } from './../../../src/shared/selectors/scoreSelector';
import deck from './../../../src/shared/constants/deck';
import _ from 'lodash';

describe("Blue Score selector", () => {

    let playerOneCards, playerTwoCards;
    beforeEach(() => {
        playerOneCards = [deck[0], deck[1], deck[2], deck[3], deck[4]].map(card => {
            card.owner = 0;
            return card;
        });

        playerTwoCards = [deck[5], deck[6], deck[7], deck[8], deck[9]].map(card => {
            card.owner = 1;
            return card;
        });
    });

    describe("given a new game", () => {

        let board, hand;
        beforeEach(() => {
            hand = [playerOneCards[0], playerOneCards[1], playerOneCards[2], playerOneCards[3], playerOneCards[4]],
            board = [null, null, null, null, null, null, null, null, null]
        });

        it('should have a default score of 5', () => {
            expect(blueScoreSelector(hand, board)).toEqual(5)
        });
    });

    describe("given a game in which the player placed one card", () => {

        let board, hand;
        beforeEach(() => {
            hand = [playerOneCards[0], playerOneCards[1], playerOneCards[2], playerOneCards[3]];
                board = [playerOneCards[4], null, null, null, null, null, null, null, null]
        });

        it('should have a score of 5', () => {
            expect(blueScoreSelector(hand, board)).toEqual(5)
        });
    });

    describe("given a game in which the player and opponent have placed one card", () => {

        let board, hand;
        beforeEach(() => {
            hand = [playerOneCards[0], playerOneCards[1], playerOneCards[2], playerOneCards[3]];
            board = [playerOneCards[4], playerTwoCards[0], null, null, null, null, null, null, null]
        });

        it('should have a score of 5', () => {
            expect(blueScoreSelector(hand, board)).toEqual(5)
        });
    });

});