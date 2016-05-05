import expect from 'expect';
import { AUTH_SIGNIN_SUCCESS, receiveSignIn } from './../index';

describe('src/shared/reducers/auth/actions/receiveSignin', () => {
    describe('Given AUTH_SIGNIN_SUCCESS action type', () => {
        let user;
        let expectedAction;
        beforeEach(() => {
            user = {
                name: 'walker',
                id: 12
            };
            expectedAction = {
                type: AUTH_SIGNIN_SUCCESS,
                payload: {
                    user: user
                }
            };
        });

        describe('When invoking the receiveSignIn action creator', () => {
            it('should create an action', () => {
                expect(receiveSignIn(user)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(receiveSignIn(user).payload.user).toEqual(user);
            });
        });
    });
});