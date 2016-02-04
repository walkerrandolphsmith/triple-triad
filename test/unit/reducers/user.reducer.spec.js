import expect from 'expect';
import { Map } from 'immutable';
import reducer from './../../../src/shared/reducers/user';
import {
    USER_PROFILE,
    USER_PROFILE_SUCCESS,
    } from './../../../src/shared/constants/actionTypes';

describe("User reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            loading: false,
            loaded: false,
            user: new Map({
                verified: null
            })
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given fetching user profile data is initiated", () => {

        it('should handle USER_PROFILE action', () => {
            let newState = reducer(initialState, {
                type: USER_PROFILE
            });
            expect(newState.get('loading')).toEqual(true);
        });
    });

    describe("Given fetching user profile data is successful", () => {

        let user;
        beforeEach(() => {
            user = {
                verified: true
            };
        });

        it('should handle USER_PROFILE_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: USER_PROFILE_SUCCESS,
                payload: {
                    user: user
                }
            });
            expect(newState.get('loading')).toEqual(false);
            expect(newState.get('loaded')).toEqual(true);
            expect(newState.get('user').get('verified')).toEqual(user.verified);
        });
    });

});