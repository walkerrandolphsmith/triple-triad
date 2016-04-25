import expect from 'expect';
import { Map } from 'immutable';
import reducer from './auth';
import { __RewireAPI__ } from './auth';
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
    } from './../../constants/actionTypes';

describe('src/shared/reducers/auth/auth', () => {
    describe('Given an initial authentication state', () => {
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

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling AUTH_SIGNIN', () => {
            let signin = expect.createSpy();
            __RewireAPI__.__Rewire__('signin', signin);

            reducer(initialState, {
                type: AUTH_SIGNIN
            });

            it('should call signin', () => {
                expect(signin).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNIN_SUCCESS', () => {
            let signinSuccess = expect.createSpy();
            __RewireAPI__.__Rewire__('signinSuccess', signinSuccess);

            reducer(initialState, {
                type: AUTH_SIGNIN_SUCCESS,
                payload: {
                    user: {
                        id: 20,
                        name: 'walker'
                    }
                }
            });

            it('should call signinSuccess', () => {
                expect(signinSuccess).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNIN_FAILED', () => {
            let signinFailure = expect.createSpy();
            __RewireAPI__.__Rewire__('signinFailure', signinFailure);

            reducer(initialState, {
                type: AUTH_SIGNIN_FAIL,
                payload: {
                    error: 'message'
                }
            });

            it('should call signinFailure', () => {
                expect(signinFailure).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP', () => {
            let signup = expect.createSpy();
            __RewireAPI__.__Rewire__('signup', signup);

            reducer(initialState, {
                type: AUTH_SIGNUP
            });

            it('should call signup', () => {
                expect(signup).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP_SUCCESS', () => {
            let signupSuccess = expect.createSpy();
            __RewireAPI__.__Rewire__('signupSuccess', signupSuccess);

            reducer(initialState, {
                type: AUTH_SIGNUP_SUCCESS,
                payload: {
                    user: {
                        id: 20,
                        name: 'walker'
                    }
                }
            });

            it('should call signupSuccess', () => {
                expect(signupSuccess).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP_FAIL', () => {
            let signupFailure = expect.createSpy();
            __RewireAPI__.__Rewire__('signupFailure', signupFailure);

            reducer(initialState, {
                type: AUTH_SIGNUP_FAIL
            });

            it('should call signupFailure', () => {
                expect(signupFailure).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT', () => {
            let signout = expect.createSpy();
            __RewireAPI__.__Rewire__('signout', signout);

            reducer(initialState, {
                type: AUTH_SIGNOUT
            });

            it('should call signout', () => {
                expect(signout).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT_SUCCESS', () => {
            let signoutSuccess = expect.createSpy();
            __RewireAPI__.__Rewire__('signoutSuccess', signoutSuccess);

            reducer(initialState, {
                type: AUTH_SIGNOUT_SUCCESS
            });

            it('should call signoutSuccess', () => {
                expect(signoutSuccess).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT_FAIL', () => {
            let signoutFailure = expect.createSpy();
            __RewireAPI__.__Rewire__('signoutFailure', signoutFailure);

            reducer(initialState, {
                type: AUTH_SIGNOUT_FAIL,
                payload: {
                    error: 'message'
                }
            });

            it('should call signoutFailure', () => {
                expect(signoutFailure).toHaveBeenCalled();
            });
        });
    });
});