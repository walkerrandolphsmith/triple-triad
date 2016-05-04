import expect from 'expect';
import { Map } from 'immutable';
import reducer from './user';
import { __RewireAPI__ } from './user';
import {
    USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './../../constants/actionTypes';

describe('src/shared/reducers/user/user', () => {
    describe('Given user state', () => {
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

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling USER_PROFILE', () => {
            let userProfileRequest = expect.createSpy();
            __RewireAPI__.__Rewire__('userProfileRequest', userProfileRequest);

            reducer(initialState, {
                type: USER_PROFILE
            });

            it('should call userProfileRequest', () => {
                expect(userProfileRequest).toHaveBeenCalled();
            });
        });

        describe('When handling USER_PROFILE_SUCCESS', () => {
            let userProfileSuccess = expect.createSpy();
            __RewireAPI__.__Rewire__('userProfileSuccess', userProfileSuccess);

            reducer(initialState, {
                type: USER_PROFILE_SUCCESS
            });

            it('should call userProfileSuccess', () => {
                expect(userProfileSuccess).toHaveBeenCalled();
            });
        });
    });
});