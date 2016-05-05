import expect from 'expect';
import { AUTH_SIGNUP_SUCCESS, receiveUser } from './../index';

describe('src/shared/reducers/auth/actions/receiveUser', () => {
    describe('Given AUTH_SIGNUP_SUCCESS action type', () => {
        let user;
        let expectedAction;
        beforeEach(() => {
            user = {
                name: 'walker',
                id: 12
            };
            expectedAction = {
                type: AUTH_SIGNUP_SUCCESS,
                payload: {
                    user: user
                }
            };
        });

        describe('When invoking the receiveSignIn action creator', () => {
            it('should create an action', () => {
                expect(receiveUser(user)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(receiveUser(user).payload.user).toEqual(user);
            });
        });
    });
});