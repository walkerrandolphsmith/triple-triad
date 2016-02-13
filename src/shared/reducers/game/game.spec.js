import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './game';
import {
    SET_PHASE,
    ADD_CARD,
    SELECT_CARD,
    SELECT_PIECE,
    PLACE_CARD,
    UPDATE_BOARD,
    START_AI_TURN,
    END_AI_TURN,
    RESET_GAME
} from './../../constants/actionTypes';
import deck from './../../constants/deck';

describe("Game reducer", () => {

    let initialState, ownerType;
    beforeEach(() => {
        initialState = new Map({
            deck: deck,
            selectedCard: -1,
            selectedPiece: -1,
            phase: 'settingsSelection'
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given you update the phase of a round", () => {
        let newState, phase;
        beforeEach(() => {
            phase = 'gamePhase';

            newState = reducer(initialState, {
                type: SET_PHASE,
                payload: {
                    phase: phase
                }
            });
        });

        it('should handle SET_PHASE by updating the phase of the round', () => {
            expect(newState.get('phase')).toEqual(phase);
        });
    });

    describe('When adding a card by id to the owners hand', () => {
        let newState, id, owner;
        beforeEach(() => {
            id = 0;
            owner = 2;

            newState = reducer(initialState, {
                type: ADD_CARD,
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
                type: SELECT_CARD,
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
                type: SELECT_PIECE,
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
                type: UPDATE_BOARD,
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
                type: START_AI_TURN
            });
            expect(newState).toEqual(initialState);
        });

        it('should handle END_AI_TURN by setting the current turn to the player', () => {
            let newState = reducer(initialState, {
                type: END_AI_TURN
            });
            expect(newState).toEqual(initialState);
        });
    });

    describe('resetting the game', () => {

        it('should handle RESET_GAME by setting current turn to the opponent', () => {
            let newState = reducer(initialState, {
                type: RESET_GAME
            });
            expect(newState).toEqual(initialState);
        });
    });

});