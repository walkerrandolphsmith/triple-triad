import expect from 'expect';
import { toJS, fromJS } from 'immutable';
import _ from 'lodash';
import reducer from './../../../src/shared/reducers/game';
import * as types from './../../../src/shared/constants/action-types';
import deck from './../../../src/shared/constants/deck';

describe("Game reducer", () => {

    let initialState, ownerType;
    beforeEach(() => {
        initialState = fromJS({
            deck: deck
        })
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe('When adding a card by id to the owners hand', () => {
        let newState;
        let cardFromDeck, id, owner;
        beforeEach(() => {
            id = 0;
            owner = 2;
            cardFromDeck = _.find(deck, {id: id});

            newState = reducer(initialState, {
                type: types.ADD_CARD,
                payload: {
                    id: id,
                    owner: owner
                }
            }).toJS();
        });

        it('should handle ADD_CARD by updating card in deck with new owner', () => {
            expect(_.find(newState.deck, {id: id}).owner).toEqual(owner);
        });
    });

    describe('When removing a card by id from the hand', () => {

        let newState;
        let cardFromDeck, id;
        beforeEach(() => {
            id = 0;
            cardFromDeck = _.find(deck, {id: id});

            let initialState = fromJS({
                deck: deck
            });


            newState = reducer(initialState, {
                type: types.REMOVE_CARD,
                payload: {
                    id: id
                }
            }).toJS();
        });

        it('should handle REMOVE_CARD by updating the card in deck with no owner', () => {
            expect(_.find(newState.deck, {id: id}).owner).toEqual(0);
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
            }).toJS();
        });

        it('should handle SELECT_CARD', () => {
            expect(_.find(newState.deck, {isSelected: true}).id).toEqual(id);
        });
    });

    describe("Selecting a piece by the player", () => {

        let index, newState;
        beforeEach(() => {
            index = 0;

            let newDeck = _.cloneDeep(deck);
            newDeck[0].isSelected = true;
            let gameWithSelectedCard = fromJS({
                deck: newDeck
            });

            newState = reducer(gameWithSelectedCard, {
                type: types.SELECT_PIECE,
                payload: {
                    index: index
                }
            }).toJS();
        });

        it('should handle SELECT_PIECE', () => {

            expect(_.find(newState.deck, {isSelected: true}).boardIndex).toEqual(index);
        });
    });

    describe("updating the board when a card is flipped", () => {

        let newState, owner, index, gameWithSelectedPiece;
        beforeEach(() => {
            owner = 2; index = 5;

            let newDeck = _.cloneDeep(deck);
            newDeck[0].boardIndex = index;
            let gameWithSelectedPiece = fromJS({
                deck: newDeck
            });

            newState = reducer(gameWithSelectedPiece, {
                type: types.UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: owner
                }
            }).toJS();
        });

        it('should handle UPDATE_BOARD', () => {
            expect(_.find(newState.deck, {boardIndex: index}).owner).toEqual(owner);
        });
    });


    describe('opponent turn in progress game', () => {

        it('should handle START_AI_TURN by setting current turn to the opponent', () => {
            let newState = reducer(initialState, {
                type: types.START_AI_TURN
            });
            expect(newState).toEqual(initialState);
        });

        it('should handle END_AI_TURN by setting the current turn to the player', () => {
            let newState = reducer(initialState, {
                type: types.END_AI_TURN
            });
            expect(newState).toEqual(initialState);
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