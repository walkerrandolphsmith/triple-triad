import expect from 'expect';
import { fromJS } from 'immutable';
import _ from 'lodash';
import reducer from './../../../src/shared/reducers/game';
import * as types from './../../../src/shared/constants/action-types';
import deck from './../../../src/shared/constants/deck';

describe("Game reducer", () => {

    let initialState, ownerType;
    beforeEach(() => {
        initialState = fromJS({
            deck: deck,
            selectedCard: -1,
            selectedPiece: -1
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe('When adding a card by id to the owners hand', () => {
        let newState, id, owner;
        beforeEach(() => {
            id = 0;
            owner = 2;

            newState = reducer(initialState, {
                type: types.ADD_CARD,
                payload: {
                    id: id,
                    owner: owner
                }
            });
        });

        it('should handle ADD_CARD by updating card in deck with new owner', () => {
            expect(newState.get('deck').find(card => card.get('id') === id).get('owner')).toEqual(owner);
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
            expect(newState.get('selectedCard')).toEqual(id);
        });
    });

    describe("Selecting a piece by the player", () => {

        let index, newState;
        beforeEach(() => {
            index = 0;

            newState = reducer(initialState, {
                type: types.SELECT_PIECE,
                payload: {
                    index: index
                }
            });
        });

        it('should handle SELECT_PIECE', () => {
            expect(newState.get('selectedPiece')).toEqual(index);
        });
    });

    describe("updating the board when a card is flipped", () => {

        let newState, owner, index;
        beforeEach(() => {
            owner = 2; index = 5;

            let deck = initialState.get('deck');
            deck = deck.update(
                deck.findIndex(
                    card => card.get('id') === 0
                ),
                card => card.set('boardIndex', index)
            );

            initialState = initialState.set('deck', deck);

            newState = reducer(initialState, {
                type: types.UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: owner
                }
            });
        });

        it('should handle UPDATE_BOARD', () => {
            expect(newState.get('deck').find(card => card.get('boardIndex') === index).get('owner')).toEqual(owner);
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