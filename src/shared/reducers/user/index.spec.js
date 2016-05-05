import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import {
    USER_PROFILE_FAILED,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/user', () => {
    describe('Given user state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                loading: false,
                loaded: false,
                failed: false,
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
            let userProfileRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('userProfileRequested', userProfileRequested);

            reducer(initialState, {
                type: USER_PROFILE_REQUEST
            });

            it('should call userProfileRequested', () => {
                expect(userProfileRequested).toHaveBeenCalled();
            });
        });

        describe('When handling USER_PROFILE_SUCCESS', () => {
            let userProfileSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('userProfileSucceeded', userProfileSucceeded);

            reducer(initialState, {
                type: USER_PROFILE_SUCCESS
            });

            it('should call userProfileSucceeded', () => {
                expect(userProfileSucceeded).toHaveBeenCalled();
            });
        });
    });
});