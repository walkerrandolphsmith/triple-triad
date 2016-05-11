import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import {
    AUTH_SIGNIN,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAIL,
    AUTH_SIGNOUT,
    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAIL,
    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAIL,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/auth', () => {
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
                    id: null,
                    email: null,
                    username: null,
                    isVerified: false,
                    avatar: null
                })
            });
        });

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling AUTH_SIGNIN', () => {
            let signInRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('signInRequested', signInRequested);

            reducer(initialState, {
                type: AUTH_SIGNIN
            });

            it('should call signInRequested', () => {
                expect(signInRequested).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNIN_SUCCESS', () => {
            let signInSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('signInSucceeded', signInSucceeded);

            reducer(initialState, {
                type: AUTH_SIGNIN_SUCCESS,
                payload: {
                    user: {
                        id: 20,
                        name: 'walker'
                    }
                }
            });

            it('should call signInSucceeded', () => {
                expect(signInSucceeded).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNIN_FAILED', () => {
            let signInFailed = expect.createSpy();
            __RewireAPI__.__Rewire__('signInFailed', signInFailed);

            reducer(initialState, {
                type: AUTH_SIGNIN_FAIL,
                payload: {
                    error: 'message'
                }
            });

            it('should call signInFailed', () => {
                expect(signInFailed).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP', () => {
            let signUpRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('signUpRequested', signUpRequested);

            reducer(initialState, {
                type: AUTH_SIGNUP
            });

            it('should call signUpRequested', () => {
                expect(signUpRequested).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP_SUCCESS', () => {
            let signUpSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('signUpSucceeded', signUpSucceeded);

            reducer(initialState, {
                type: AUTH_SIGNUP_SUCCESS,
                payload: {
                    user: {
                        id: 20,
                        name: 'walker'
                    }
                }
            });

            it('should call signUpSucceeded', () => {
                expect(signUpSucceeded).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNUP_FAIL', () => {
            let signUpFailed = expect.createSpy();
            __RewireAPI__.__Rewire__('signUpFailed', signUpFailed);

            reducer(initialState, {
                type: AUTH_SIGNUP_FAIL
            });

            it('should call signUpFailed', () => {
                expect(signUpFailed).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT', () => {
            let signOutRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('signOutRequested', signOutRequested);

            reducer(initialState, {
                type: AUTH_SIGNOUT
            });

            it('should call signOutRequested', () => {
                expect(signOutRequested).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT_SUCCESS', () => {
            let signOutSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('signOutSucceeded', signOutSucceeded);

            reducer(initialState, {
                type: AUTH_SIGNOUT_SUCCESS
            });

            it('should call signOutSucceeded', () => {
                expect(signOutSucceeded).toHaveBeenCalled();
            });
        });

        describe('When handling AUTH_SIGNOUT_FAIL', () => {
            let signOutFailed = expect.createSpy();
            __RewireAPI__.__Rewire__('signOutFailed', signOutFailed);

            reducer(initialState, {
                type: AUTH_SIGNOUT_FAIL,
                payload: {
                    error: 'message'
                }
            });

            it('should call signOutFailed', () => {
                expect(signOutFailed).toHaveBeenCalled();
            });
        });
    });
});