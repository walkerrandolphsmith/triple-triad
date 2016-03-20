import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './games';
import { __RewireAPI__ } from './games';
import {
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    CREATE_GAME_FAILED,
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS
} from './../../constants/actionTypes';

describe("Given games state", () => {

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
            games: new List([])
        });
    });

    describe("When given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("When handling GET_GAMES_REQUEST", () => {

        let getGamesRequest = expect.createSpy();
        __RewireAPI__.__Rewire__('getGamesRequest', getGamesRequest);

        reducer(initialState, {
            type: GET_GAMES_REQUEST
        });

        it('should call getGamesRequest', () => {
            expect(getGamesRequest).toHaveBeenCalled();
        });
    });

    describe("When handling GET_GAMES_SUCCESS", () => {

        let getGamesSuccess = expect.createSpy();
        __RewireAPI__.__Rewire__('getGamesSuccess', getGamesSuccess);

        reducer(initialState, {
            type: GET_GAMES_SUCCESS,
            payload: {
                games: [{id: 0}]
            }
        });

        it('should call getGamesSuccess', () => {
            expect(getGamesSuccess).toHaveBeenCalled();
        });
    });

    describe("When handling GET_GAMES_FAILED", () => {

        let getGamesFailed = expect.createSpy();
        __RewireAPI__.__Rewire__('getGamesFailed', getGamesFailed);

        reducer(initialState, {
            type: GET_GAMES_FAILED
        });

        it('should call getGamesFailed', () => {
            expect(getGamesFailed).toHaveBeenCalled();
        });
    });

    describe("When handling CREATE_GAME_REQUEST", () => {

        let createGameRequest = expect.createSpy();
        __RewireAPI__.__Rewire__('createGameRequest', createGameRequest);

        reducer(initialState, {
            type: CREATE_GAME_REQUEST
        });

        it('should call createGameRequest', () => {
            expect(createGameRequest).toHaveBeenCalled();
        });
    });

    describe("When handling CREATE_GAME_SUCCESS", () => {

        let createGameSuccess = expect.createSpy();
        __RewireAPI__.__Rewire__('createGameSuccess', createGameSuccess);

        reducer(initialState, {
            type: CREATE_GAME_SUCCESS,
            payload: {
                game: {id: 0}
            }
        });

        it('should call createGameSuccess', () => {
            expect(createGameSuccess).toHaveBeenCalled();
        });
    });

    describe("When handling CREATE_GAME_FAILED", () => {

        let createGameFailed = expect.createSpy();
        __RewireAPI__.__Rewire__('createGameFailed', createGameFailed);

        reducer(initialState, {
            type: CREATE_GAME_FAILED
        });

        it('should call createGameFailed', () => {
            expect(createGameFailed).toHaveBeenCalled();
        });
    });
});