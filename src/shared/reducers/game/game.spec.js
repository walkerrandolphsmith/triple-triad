import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './game';
import { __RewireAPI__ } from './game';
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

describe("Given initial game state", () => {

    let initialState, ownerType;
    beforeEach(() => {
        initialState = new Map({
            gameId: -1,
            owner: -1,
            opponent: -1,
            accepted: false,
            currentPlayer: -1,
            deck: deck,
            selectedCard: -1,
            selectedPiece: -1,
            phase: 'settingsSelection'
        });
    });

    describe("When given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("When handling SET_PHASE", () => {

        let setPhase = expect.createSpy();
        __RewireAPI__.__Rewire__('setPhase', setPhase);

        reducer(initialState, {
            type: SET_PHASE,
            payload: {
                phase: 'phase'
            }
        });

        it('should call setPhase', () => {
            expect(setPhase).toHaveBeenCalled();
        });
    });

    describe("When handling ADD_CARD", () => {

        let addCard = expect.createSpy();
        __RewireAPI__.__Rewire__('addCard', addCard);

        reducer(initialState, {
            type: ADD_CARD,
            payload: {
                id: 20,
                owner: 1
            }
        });

        it('should call addCard', () => {
            expect(addCard).toHaveBeenCalled();
        });
    });

    describe("When handling SELECT_CARD", () => {

        let selectCard = expect.createSpy();
        __RewireAPI__.__Rewire__('selectCard', selectCard);

        reducer(initialState, {
            type: SELECT_CARD,
            payload: {
                id: 20
            }
        });

        it('should call selectCard', () => {
            expect(selectCard).toHaveBeenCalled();
        });
    });

    describe("When handling SELECT_PIECE", () => {

        let selectPiece = expect.createSpy();
        __RewireAPI__.__Rewire__('selectPiece', selectPiece);

        reducer(initialState, {
            type: SELECT_PIECE,
            payload: {
                index: 20
            }
        });

        it('should call selectPiece', () => {
            expect(selectPiece).toHaveBeenCalled();
        });
    });

    describe("When handling UPDATE_BOARD", () => {

        let updateBoard = expect.createSpy();
        __RewireAPI__.__Rewire__('updateBoard', updateBoard);

        reducer(initialState, {
            type: UPDATE_BOARD,
            payload: {
                index: 20,
                owner: 1
            }
        });

        it('should call updateBoard', () => {
            expect(updateBoard).toHaveBeenCalled();
        });
    });

    describe("When handling START_AI_TURN", () => {

        let startAiTurn = expect.createSpy();
        __RewireAPI__.__Rewire__('startAiTurn', startAiTurn);

        reducer(initialState, {
            type: START_AI_TURN
        });

        it('should call startAiTurn', () => {
            expect(startAiTurn).toHaveBeenCalled();
        });
    });

    describe("When handling END_AI_TURN", () => {

        let endAiTurn = expect.createSpy();
        __RewireAPI__.__Rewire__('endAiTurn', endAiTurn);

        reducer(initialState, {
            type: END_AI_TURN
        });

        it('should call endAiTurn', () => {
            expect(endAiTurn).toHaveBeenCalled();
        });
    });

    describe("When handling RESET_GAME", () => {

        let resetGame = expect.createSpy();
        __RewireAPI__.__Rewire__('resetGame', resetGame);

        reducer(initialState, {
            type: RESET_GAME
        });

        it('should call resetGame', () => {
            expect(resetGame).toHaveBeenCalled();
        });
    });
});