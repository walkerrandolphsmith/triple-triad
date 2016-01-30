import expect from 'expect';
import { Map } from 'immutable';
import reducer from './../../../src/shared/reducers/auth';
import {
    AUTH_SIGNIN,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAIL,
    AUTH_SIGNOUT,
    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAIL,
    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAIL
    } from './../../../src/shared/constants/actionTypes';

describe("Auth reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            loading: false,
            loaded: false,
            signingIn: false,
            signingOut: false,
            signingUp: false,
            user: new Map({
                username: null,
                id: null
            })
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given signing in is successful", () => {

        let user;
        beforeEach(() => {
            user = {
                name: 'walker',
                id: 888
            };
        });

        it('should handle AUTH_SIGNIN_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNIN_SUCCESS,
                payload: {
                    user: user
                }
            });
            expect(newState.get('signingIn')).toEqual(true);
            expect(newState.get('user').get('username')).toEqual(user.name);
            expect(newState.get('user').get('id')).toEqual(user.id);
        });
    });

    describe("Given signing in is unsuccessful", () => {

        let error;
        beforeEach(() => {
            error = 'error';
        });

        it('should handle AUTH_SIGNIN_FAIL action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNIN_FAIL,
                payload: {
                    error: error
                }
            });
            expect(newState.get('signingIn')).toEqual(false);
            expect(newState.get('user').get('username')).toEqual(null);
            expect(newState.get('user').get('id')).toEqual(null);
            expect(newState.get('signInError')).toEqual(error);
        });
    });

    describe("Given user initiates signing up", () => {

        it('should handle AUTH_SIGNUP action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNUP
            });
            expect(newState.get('signingUp')).toEqual(true);
        });
    });

    describe("Given signing in is successful", () => {

        let username, id;
        beforeEach(() => {
            username = 'walker';
            id = 888;
        });

        it('should handle AUTH_SIGNUP_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNUP_SUCCESS,
                payload: {
                    username: username,
                    id: id
                }
            });
            expect(newState.get('signingUp')).toEqual(false);
            expect(newState.get('user').get('username')).toEqual(username);
            expect(newState.get('user').get('id')).toEqual(id);
        });
    });

    describe("Given signing in is unsuccessful", () => {

        it('should handle AUTH_SIGNUP_FAIL action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNUP_FAIL
            });
            expect(newState.get('signingIn')).toEqual(false);
            expect(newState.get('user').get('username')).toEqual(null);
            expect(newState.get('user').get('id')).toEqual(null);
        });
    });

    describe("Given user initiates signing out", () => {

        it('should handle AUTH_SIGNOUT action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNOUT
            });
            expect(newState.get('signingOut')).toEqual(true);
        });
    });

    describe("Given signing out is successful", () => {

        it('should handle AUTH_SIGNOUT_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNOUT_SUCCESS
            });
            expect(newState.get('signingOut')).toEqual(false);
            expect(newState.get('user').get('username')).toEqual(null);
            expect(newState.get('user').get('id')).toEqual(null);
        });
    });

    describe("Given signing out is unsuccessful", () => {

        let error;
        beforeEach(() =>{
            error = 'error';
        });

        it('should handle AUTH_SIGNOUT_FAIL action', () => {
            let newState = reducer(initialState, {
                type: AUTH_SIGNOUT_FAIL,
                payload: {
                    error: error
                }
            });
            expect(newState.get('signingOut')).toEqual(false);
            expect(newState.get('signOutError')).toEqual(error);
        });
    });



});