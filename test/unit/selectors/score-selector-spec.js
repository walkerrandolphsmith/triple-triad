import expect from 'expect';
import { scoreSelector } from './../../../src/shared/selectors/scoreSelector';
import deck from './../../../src/shared/constants/deck';
import _ from 'lodash';


describe("Score selector", () => {

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

    describe("Score selector of a not started game", () => {

        let game;
        beforeEach(() => {

            game = {
                hand: [playerOneCards[0], playerOneCards[1], playerOneCards[2], playerOneCards[3], playerOneCards[4]],
                opponentHand: [playerTwoCards[0], playerTwoCards[1], playerTwoCards[2], playerTwoCards[3], playerTwoCards[4]],
                board: [null, null, null, null, null, null, null, null, null]
            }
        });

        it('should have a default score of 5 v 5', () => {
            expect(scoreSelector(game)).toEqual({
                blue: 5,
                red: 5
            })
        });
    });

    describe("Score selector given player one takes first move", () => {

        let game;
        beforeEach(() => {

            game = {
                hand: [playerOneCards[0], playerOneCards[1], playerOneCards[2], playerOneCards[3]],
                opponentHand: [playerTwoCards[0], playerTwoCards[1], playerTwoCards[2], playerTwoCards[3], playerTwoCards[4]],
                board: [playerOneCards[4], null, null, null, null, null, null, null, null]
            }
        });

        it('should have a score of 5 v 5', () => {
            expect(scoreSelector(game)).toEqual({
                blue: 5,
                red: 5
            })
        });
    });

    describe("Score selector given player one flipped player two card", () => {

        let game;
        beforeEach(() => {

            let playerTwoFlippedCard = playerTwoCards[4];
            playerTwoFlippedCard.owner = 0;

            game = {
                hand: [playerOneCards[0], playerOneCards[1], playerOneCards[2]],
                opponentHand: [playerTwoCards[0], playerTwoCards[1], playerTwoCards[2], playerTwoCards[3]],
                board: [playerOneCards[3], playerOneCards[4], playerTwoFlippedCard, null, null, null, null, null, null]
            }
        });

        it('should have a score of 6 v 4', () => {
            expect(scoreSelector(game)).toEqual({
                blue: 6,
                red: 4
            })
        });
    });

    describe("Score selector given a full board with no flipped cards", () => {

        let game;
        beforeEach(() => {

            game = {
                hand: [],
                opponentHand: [playerTwoCards[4]],
                board: [
                    playerOneCards[0],
                    playerOneCards[1],
                    playerOneCards[2],
                    playerOneCards[3],
                    playerOneCards[4],
                    playerTwoCards[0],
                    playerTwoCards[1],
                    playerTwoCards[2],
                    playerTwoCards[3]
                ]
            }
        });

        it('should have a score of 5 v 5', () => {
            expect(scoreSelector(game)).toEqual({
                blue: 5,
                red: 5
            })
        });
    });

    describe("Score selector given player one owns every card on board ", () => {

        let game;
        beforeEach(() => {



            game = {
                hand: [],
                opponentHand: [playerTwoCards[4]],
                board: [
                    playerOneCards[0],
                    playerOneCards[1],
                    playerOneCards[2],
                    playerOneCards[3],
                    playerOneCards[4],
                    playerOneCards[0],
                    playerOneCards[1],
                    playerOneCards[2],
                    playerOneCards[3],
                ]
            }
        });

        it('should have a score of 9 v 1', () => {
            expect(scoreSelector(game)).toEqual({
                blue: 9,
                red: 1
            })
        });
    });

});