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
            player: 1,
            opponent: 2,
            selectedCard: -1,
            board: [null, null, null, null, null, null, null, null, null]
        }
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {}).toJS()).toEqual(initialState)
        });
    });

    describe('When adding a card by id to the hand', () => {
        let newState;
        let cardFromDeck, id;
        beforeEach(() => {
            id = 0;
            cardFromDeck = _.find(deck, {id: id});

            newState = reducer(initialState, {
                type: types.ADD_CARD,
                payload: {
                    id: id
                }
            });
        });

        it('should handle ADD_CARD by updating card in deck with new owner', () => {
            expect(_.find(newState.deck, {id: id}).owner).toEqual(1);
        });
    });

    describe('When removing a card by id from the hand', () => {

        let newState;
        let cardFromDeck, id;
        beforeEach(() => {
            id = 0;
            cardFromDeck = _.find(deck, {id: id});

            let initialState = {
                step: 0,
                deck: deck,
                player: 1,
                opponent: 2,
                selectedCard: -1,
                board: [null, null, null, null, null, null, null, null, null]
            };


            newState = reducer(initialState, {
                type: types.REMOVE_CARD,
                payload: {
                    id: id
                }
            });
        });

        it('should handle REMOVE_CARD by updating the card in deck with no owner', () => {
            expect(_.find(newState.deck, {id: id}).owner).toEqual(0);
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

    describe('setting players hand randomly', () => {

        let newState, owner;
        beforeEach(() => {
            let owner = 1;
            newState = reducer(initialState, {
                type: types.SET_HAND,
                payload: {
                    owner: owner
                }
            });
        });

        it('should handle SET_HANDS by populating the players hand with five cards', () => {
            let hand = _.filter(newState.deck, card => { return card.owner === 1});
            expect(hand.length).toEqual(5);
        });
    });

    describe("setting opponents hand randomly", () => {

        let newState, owner;
        beforeEach(() => {
            let owner = 2;
            newState = reducer(initialState, {
                type: types.SET_HAND,
                payload: {
                    owner: owner
                }
            })
        });

        it('should handle SET_HANDS by populating the opponents hand with five cards', () => {
            let hand = _.filter(newState.deck, card => { return card.owner === 2});
            expect(hand.length).toEqual(5);
        });
    });

    describe("Selecting a card", () => {

        let id, newState;
        beforeEach(() => {
            id = 0;

            newState = reducer(initialState, {
                type: types.SELECT_CARD,
                payload: {
                    id: id
                }
            });
        });

        it('should handle SELECT_CARD', () => {
            expect(newState.selectedCard).toEqual(id);
        });
    });

    describe("Selecting a piece by the player", () => {

        let index, selectedCard, newState;
        beforeEach(() => {
            index = 0;
            selectedCard = 0;

            let initialState = {
                step: 2,
                deck: deck,
                player: 1,
                opponent: 2,
                selectedCard: selectedCard,
                board: [null, null, null, null, null, null, null, null, null]
            };

            newState = reducer(initialState, {
                type: types.SELECT_PIECE,
                payload: {
                    index: index
                }
            });
        });

        it('should handle SELECT_PIECE', () => {
            expect(newState.board[index]).toEqual(_.find(newState.deck, {id: selectedCard}));
        });
    });

    describe("updating the board when a card is flipped", () => {

        let newState, flippedCard, index, oldPlayer, newPlayer;
        beforeEach(() => {
            oldPlayer = 0;
            newPlayer = 1;

            flippedCard = deck[0];
            flippedCard.owner = 0;

            index = 0;

            let initialState = {
                step: 2,
                deck: deck,
                hand: [],
                opponentHand: [],
                selectedCard: -1,
                board: [flippedCard, null, null, null, null, null, null, null, null]
            };

            newState = reducer(initialState, {
                type: types.UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: newPlayer
                }
            });
        });

        it('should handle SELECT_PIECE', () => {
            expect(newState.board[index].owner).toEqual(newPlayer);
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