import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './index';
import {
    ADD_CARD,
    END_AI_TURN,
    GET_GAME_SUCCESS,
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    PLACE_CARD,
    START_AI_TURN,
    SELECT_CARD,
    SELECT_PIECE,
    SET_OPPONENT,
    SET_CURRENT_GAME,
    SET_CURRENT_PLAYER,
    SHOW_CURRENT_PLAYER_MESSAGE,
    SET_PHASE,
    UPDATE_BOARD,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/game', () => {
    describe('Given an initial game state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                getGames: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                }),
                newGame: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                }),
                gameRoute: -1,
                games: new List([])
            });
        });

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling ADD_CARD', () => {
            let cardAdded = expect.createSpy();
            __RewireAPI__.__Rewire__('cardAdded', cardAdded);

            reducer(initialState, {
                type: ADD_CARD
            });

            it('should call cardAdded', () => {
                expect(cardAdded).toHaveBeenCalled();
            });
        });

        describe('When handling END_AI_TURN', () => {
            let aiTurnEnded = expect.createSpy();
            __RewireAPI__.__Rewire__('aiTurnEnded', aiTurnEnded);

            reducer(initialState, {
                type: END_AI_TURN
            });

            it('should call aiTurnEnded', () => {
                expect(aiTurnEnded).toHaveBeenCalled();
            });
        });

        describe('When handling GET_GAME_SUCCESS', () => {
            let getGameSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('getGameSucceeded', getGameSucceeded);

            reducer(initialState, {
                type: GET_GAME_SUCCESS
            });

            it('should call getGameSucceeded', () => {
                expect(getGameSucceeded).toHaveBeenCalled();
            });
        });

        describe('When handling GET_GAMES_FAILED', () => {
            let getGamesFailed = expect.createSpy();
            __RewireAPI__.__Rewire__('getGamesFailed', getGamesFailed);

            reducer(initialState, {
                type: GET_GAMES_FAILED
            });

            it('should call getGamesFailed', () => {
                expect(getGamesFailed).toHaveBeenCalled();
            });
        });

        describe('When handling GET_GAMES_REQUEST', () => {
            let getGamesRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('getGamesRequested', getGamesRequested);

            reducer(initialState, {
                type: GET_GAMES_REQUEST
            });

            it('should call getGamesRequested', () => {
                expect(getGamesRequested).toHaveBeenCalled();
            });
        });

        describe('When handling GET_GAMES_SUCCESS', () => {
            let getGamesSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('getGamesSucceeded', getGamesSucceeded);

            reducer(initialState, {
                type: GET_GAMES_SUCCESS
            });

            it('should call getGamesSucceeded', () => {
                expect(getGamesSucceeded).toHaveBeenCalled();
            });
        });

        describe('When handling PLACE_CARD', () => {
            let cardPlaced = expect.createSpy();
            __RewireAPI__.__Rewire__('cardPlaced', cardPlaced);

            reducer(initialState, {
                type: PLACE_CARD
            });

            it('should call cardPlaced', () => {
                expect(cardPlaced).toHaveBeenCalled();
            });
        });

        describe('When handling START_AI_TURN', () => {
            let aiTurnStarted = expect.createSpy();
            __RewireAPI__.__Rewire__('aiTurnStarted', aiTurnStarted);

            reducer(initialState, {
                type: START_AI_TURN
            });

            it('should call aiTurnStarted', () => {
                expect(aiTurnStarted).toHaveBeenCalled();
            });
        });

        describe('When handling SELECT_CARD', () => {
            let cardSelected = expect.createSpy();
            __RewireAPI__.__Rewire__('cardSelected', cardSelected);

            reducer(initialState, {
                type: SELECT_CARD
            });

            it('should call cardSelected', () => {
                expect(cardSelected).toHaveBeenCalled();
            });
        });

        describe('When handling SELECT_PIECE', () => {
            let pieceSelected = expect.createSpy();
            __RewireAPI__.__Rewire__('pieceSelected', pieceSelected);

            reducer(initialState, {
                type: SELECT_PIECE
            });

            it('should call pieceSelected', () => {
                expect(pieceSelected).toHaveBeenCalled();
            });
        });

        describe('When handling SET_CURRENT_GAME', () => {
            let currentGameSet = expect.createSpy();
            __RewireAPI__.__Rewire__('currentGameSet', currentGameSet);

            reducer(initialState, {
                type: SET_CURRENT_GAME
            });

            it('should call currentGameSet', () => {
                expect(currentGameSet).toHaveBeenCalled();
            });
        });

        describe('When handling SET_CURRENT_PLAYER', () => {
            let currentPlayerSet = expect.createSpy();
            __RewireAPI__.__Rewire__('currentPlayerSet', currentPlayerSet);

            reducer(initialState, {
                type: SET_CURRENT_PLAYER
            });

            it('should call currentPlayerSet', () => {
                expect(currentPlayerSet).toHaveBeenCalled();
            });
        });

        describe('When handling SHOW_CURRENT_PLAYER_MESSAGE', () => {
            let currentPlayerMessageShown = expect.createSpy();
            __RewireAPI__.__Rewire__('currentPlayerMessageShown', currentPlayerMessageShown);

            reducer(initialState, {
                type: SHOW_CURRENT_PLAYER_MESSAGE
            });

            it('should call currentPlayerMessageShown', () => {
                expect(currentPlayerMessageShown).toHaveBeenCalled();
            });
        });

        describe('When handling SET_OPPONENT', () => {
            let opponentSet = expect.createSpy();
            __RewireAPI__.__Rewire__('opponentSet', opponentSet);

            reducer(initialState, {
                type: SET_OPPONENT
            });

            it('should call opponentSet', () => {
                expect(opponentSet).toHaveBeenCalled();
            });
        });

        describe('When handling SET_PHASE', () => {
            let phaseSet = expect.createSpy();
            __RewireAPI__.__Rewire__('phaseSet', phaseSet);

            reducer(initialState, {
                type: SET_PHASE
            });

            it('should call phaseSet', () => {
                expect(phaseSet).toHaveBeenCalled();
            });
        });

        describe('When handling UPDATE_BOARD', () => {
            let boardUpdated = expect.createSpy();
            __RewireAPI__.__Rewire__('boardUpdated', boardUpdated);

            reducer(initialState, {
                type: UPDATE_BOARD
            });

            it('should call boardUpdated', () => {
                expect(boardUpdated).toHaveBeenCalled();
            });
        });
    });
});