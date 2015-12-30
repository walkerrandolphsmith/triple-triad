import expect from 'expect';
import _ from 'lodash';
import reducer from './../../../src/shared/reducers/game';
import * as types from './../../../src/shared/constants/action-types';
import deck from './../../../src/shared/constants/deck';

describe("Game reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = {
            deck: deck,
            ownerType: {
                none: 0,
                player: 1,
                opponent: 2
            },
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
            expect(_.find(newState.deck, {id: id}).owner).toEqual(newState.ownerType.player);
        });
    });

    describe('When removing a card by id from the hand', () => {

        let newState;
        let cardFromDeck, id;
        beforeEach(() => {
            id = 0;
            cardFromDeck = _.find(deck, {id: id});

            let initialState = {
                deck: deck,
                ownerType: {
                    none: 0,
                    player: 1,
                    opponent: 2
                },
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
            expect(_.find(newState.deck, {id: id}).owner).toEqual(newState.ownerType.none);
        });
    });

    describe('setting players hand randomly', () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.SET_HAND,
                payload: {
                    owner: initialState.ownerType.player
                }
            });
        });

        it('should handle SET_HANDS by populating the players hand with five cards', () => {
            let hand = _.filter(newState.deck, card => { return card.owner === newState.ownerType.player});
            expect(hand.length).toEqual(5);
        });
    });

    describe("setting opponents hand randomly", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.SET_HAND,
                payload: {
                    owner: initialState.ownerType.opponent
                }
            })
        });

        it('should handle SET_HANDS by populating the opponents hand with five cards', () => {
            let hand = _.filter(newState.deck, card => { return card.owner === newState.ownerType.opponent});
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
                deck: deck,
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

        let newState, flippedCard, index;
        beforeEach(() => {

            let ownerType = {
                none: 0,
                player: 1,
                opponent: 2
            };

            flippedCard = deck[0];
            flippedCard.owner = ownerType.player;

            index = 0;

            let initialState = {
                deck: deck,
                ownerType: ownerType,
                selectedCard: -1,
                board: [flippedCard, null, null, null, null, null, null, null, null]
            };

            newState = reducer(initialState, {
                type: types.UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: ownerType.opponent
                }
            });
        });

        it('should handle UPDATE_BOARD', () => {
            expect(newState.board[index].owner).toEqual(newState.ownerType.opponent);
        });
    });


    describe('opponent turn in progress game', () => {

        let initialSate;

        beforeEach(() => {

            initialSate = {
                deck: deck,
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

    describe('resetting the game', () => {

        it('should handle RESET_GAME by setting current turn to the opponent', () => {
            let newState = reducer(initialState, {
                type: types.RESET_GAME
            });
            expect(newState).toEqual(initialState);
        });
    });

});