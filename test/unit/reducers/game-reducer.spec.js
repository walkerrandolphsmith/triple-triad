import expect from 'expect';
import _ from 'lodash';
import reducer from './../../../src/shared/reducers/game';
import * as types from './../../../src/shared/constants/action-types';
import deck from './../../../src/shared/constants/deck';

describe("Game reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = {
            step: 0,
            deck: deck,
            hand: [],
            opponentHand: [],
            selectedCard: -1,
            board: [null, null, null, null, null, null, null, null, null]
        }
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {}).toJS()).toEqual(initialState)
        });
    });

    describe('Adding a card to the hand', () => {
        let newState;
        let cardFromDeck, index;
        beforeEach(() => {
            index = 0;
            cardFromDeck = deck[index];

            newState = reducer(initialState, {
                type: types.ADD_CARD,
                payload: {
                    index: index
                }
            });
        });

        it('should handle ADD_CARD by removing a card from the available deck', () => {
            let lastCard = newState.hand[newState.hand.length - 1];
            expect(_.contains(newState.deck, lastCard)).toEqual(false);
            expect(lastCard).toEqual(cardFromDeck);
        });
    });

    describe('Removing a card from the hand', () => {

        let newState;
        let cardFromHand, index;
        beforeEach(() => {
            index = 0;
            let hand = [deck[0]];
            cardFromHand = hand[index];

            let initialState = {
                step: 0,
                deck: deck,
                hand: hand,
                opponentHand: [],
                selectedCard: -1,
                board: [null, null, null, null, null, null, null, null, null]
            };


            newState = reducer(initialState, {
                type: types.REMOVE_CARD,
                payload: {
                    index: index
                }
            });
        });

        it('should handle REMOVE_CARD by adding a card to the available deck', () => {
            let lastCard = newState.deck[newState.deck.length - 1];
            expect(_.contains(newState.hand, lastCard)).toEqual(false);
            expect(_.contains(newState.deck, lastCard)).toEqual(true);
        });
    });

    describe("Going to the next step of the game wizard", () => {

        let newState;
        let step = 0;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.NEXT_STEP
            });
        });

        it('should handle NEXT_STEP by incrementing the step counter', () => {
            expect(newState.step).toEqual(step + 1);
        });
    });

    describe('setting hands randomly', () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.SET_HANDS,
                payload: {
                    randomHand: false
                }
            });
        });

        it('should handle SET_CARDS by not populating the players hand if the setting randHand is false', () => {
            expect(newState.hand.length).toEqual(0);
        });

        it('should handle SET_CARDS by populating the opponets hand with five cards', () => {
            expect(newState.opponentHand.length).toEqual(5);
        });
    });

    describe("setting players hand randomly", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.SET_HANDS,
                payload: {
                    randomHand: true
                }
            })
        });

        it('should handle SET_CARDS by not populating the players hand with five cards', () => {
            expect(newState.hand.length).toEqual(5);
        });
    });

    describe("Selecting a card", () => {

        let newState;
        let index;
        beforeEach(() => {
            index = 0;

            newState = reducer(initialState, {
                type: types.SELECT_CARD,
                payload: {
                    index: index
                }
            });
        });

        it('should handle SELECT_CARD', () => {
            expect(newState.selectedCard).toEqual(index);
        });
    });

    describe("Selecting a piece by the player", () => {

        let newState;
        let cardToPlace, index;
        beforeEach(() => {
            cardToPlace = deck[0];
            index = 0;

            let initialState = {
                step: 2,
                deck: deck,
                hand: [cardToPlace],
                opponentHand: [],
                selectedCard: -1,
                board: [null, null, null, null, null, null, null, null, null]
            };

            newState = reducer(initialState, {
                type: types.SELECT_PIECE,
                payload: {
                    index: index,
                    isPlayer: true
                }
            });
        });

        it('should handle SELECT_PIECE', () => {
            expect(_.contains(newState.hand, cardToPlace)).toEqual(false);
            expect(newState.board[index]).toEqual(cardToPlace);
        });
    });

    describe("Selecting a piece by the opponent", () => {

        let newState;
        let cardToPlace, index;
        beforeEach(() => {
            cardToPlace = deck[0];
            index = 0;

            let initialState = {
                step: 2,
                deck: deck,
                hand: [],
                opponentHand: [cardToPlace],
                selectedCard: -1,
                board: [null, null, null, null, null, null, null, null, null]
            };

            newState = reducer(initialState, {
                type: types.SELECT_PIECE,
                payload: {
                    index: index,
                    isPlayer: false
                }
            });
        });

        it('should handle SELECT_PIECE', () => {
            expect(_.contains(newState.opponentHand, cardToPlace)).toEqual(false);
            expect(newState.board[index]).toEqual(cardToPlace);
        });
    });

    describe('opponent turn in progress game', () => {

        let initialSate;

        beforeEach(() => {
            let hand = _.sample(deck, 5);
            let opponentHand = _.sample(deck, 5);
            opponentHand.forEach(card => {
                card.owner = 1;
            });

            initialSate = {
                step: 0,
                deck: deck,
                hand: hand,
                opponentHand: opponentHand,
                selectedCard: -1,
                board: [null, null, null, null, null, null, null, null, null]
            };
        });

        it('should handle START_AI_TURN by setting current turn to the opponent', () => {
            let newState = reducer(initialSate, {
                type: types.START_AI_TURN
            });
            expect(newState).toEqual(initialSate);
        });

        it('should handle END_AI_TURN by setting the current turn to the player', () => {
            let newState = reducer(initialSate, {
                type: types.END_AI_TURN
            });
            expect(newState).toEqual(initialSate);
        });
    });

    describe("A completed game", () => {

        let initialSate;
        let opponentCard;
        beforeEach(() => {
            opponentCard = deck[0];
            opponentCard.owner = 1;
            initialSate = {
                step: 2,
                deck: deck,
                hand: [],
                opponentHand: [deck[0]],
                selectedCard: -1,
                board: _.sample(deck, 9)
            }
        });

        it('should handle AI_TURN by doing nothing when all the pieces have cards on them', () => {
            expect(reducer(initialSate, {
                type: types.AI_TURN
            })).toEqual(initialSate)
        });
    });

});