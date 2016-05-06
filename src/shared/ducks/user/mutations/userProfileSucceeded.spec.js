import expect from 'expect';
import { Map } from 'immutable';
import { userProfileSucceeded } from './userProfileSucceeded';

describe('src/shared/reducers/user/userProfileSucceeded', () => {
    describe('Given user state and payload containing a user', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: false,
                failed: false,
                user: new Map({
                    verified: false
                })
            });
            payload = {
                user: {
                    verified: true
                }
            };
        });

        describe('When requesting user profile is successful', () => {
            let actual;
            beforeEach(() => {
                actual = userProfileSucceeded(state, payload);
            });

            it('should set loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set loaded to true', () => {
                expect(actual.get('loaded')).toEqual(true);
            });

            it('should set failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });

            it('should set the user to the payload user', () => {
                expect(actual.get('user').toJS()).toEqual(payload.user);
            });
        });
    });
});