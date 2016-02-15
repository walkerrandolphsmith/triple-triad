import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './games';
import {
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    CREATE_GAME_FAILED,
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS
} from './../../constants/actionTypes';

describe("Games reducer", () => {

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

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe('requesting games', () => {

        it('should handle GET_GAMES_REQUEST by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: GET_GAMES_REQUEST
            });
            expect(newState.get('getGames').get('loading')).toEqual(true);
            expect(newState.get('getGames').get('loaded')).toEqual(false);
            expect(newState.get('getGames').get('failed')).toEqual(false);
        });
    });

    describe('receiving games', () => {

        it('should handle GET_GAMES_SUCCESS by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: GET_GAMES_SUCCESS,
                payload: {
                    games: [{id: 0}]
                }
            });
            expect(newState.get('getGames').get('loading')).toEqual(false);
            expect(newState.get('getGames').get('loaded')).toEqual(true);
            expect(newState.get('getGames').get('failed')).toEqual(false);
            expect(newState.get('games').size).toEqual(1);
        });
    });

    describe('get games failed', () => {

        it('should handle GET_GAMES_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: GET_GAMES_FAILED
            });
            expect(newState.get('getGames').get('loading')).toEqual(false);
            expect(newState.get('getGames').get('loaded')).toEqual(false);
            expect(newState.get('getGames').get('failed')).toEqual(true);
        });
    });

    describe('requesting to create new game', () => {

        it('should handle CREATE_GAME_REQUEST by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: CREATE_GAME_REQUEST
            });
            expect(newState.get('newGame').get('loading')).toEqual(true);
            expect(newState.get('newGame').get('loaded')).toEqual(false);
            expect(newState.get('newGame').get('failed')).toEqual(false);
        });
    });

    describe('receiving a new game', () => {

        it('should handle CREATE_GAME_SUCCESS by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: CREATE_GAME_SUCCESS,
                payload: {
                    game: {id: 0}
                }
            });
            expect(newState.get('newGame').get('loading')).toEqual(false);
            expect(newState.get('newGame').get('loaded')).toEqual(true);
            expect(newState.get('newGame').get('failed')).toEqual(false);
            expect(newState.get('games').size).toEqual(1);
        });
    });

    describe('create game failed', () => {

        it('should handle CREATE_GAME_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: CREATE_GAME_FAILED
            });
            expect(newState.get('newGame').get('loading')).toEqual(false);
            expect(newState.get('newGame').get('loaded')).toEqual(false);
            expect(newState.get('newGame').get('failed')).toEqual(true);
        });
    });


});