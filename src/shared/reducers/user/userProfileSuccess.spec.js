import expect from 'expect';
import { Map } from 'immutable';
import userProfileSuccess from './userProfileSuccess';

describe('src/shared/reducers/user/userProfileSuccess', () => {
    describe('Given user state and payload containing a user', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: false,
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
                actual = userProfileSuccess(state, payload);
            });

            it('should set loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set loaded to true', () => {
                expect(actual.get('loaded')).toEqual(true);
            });

            it('should set the user to the payload user', () => {
                expect(actual.get('user').toJS()).toEqual(payload.user);
            });
        });
    });
});