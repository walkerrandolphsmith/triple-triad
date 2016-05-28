import expect from 'expect';
import { AUTH_SIGNIN_SUCCESS, signInSuccess } from './../index';

describe('src/shared/reducers/auth/actions/signInSuccess', () => {
    describe('Given AUTH_SIGNIN_SUCCESS action type', () => {
        let user;
        let expectedAction;
        beforeEach(() => {
            user = {
                username: 'walker',
                email: 'tester@gmail.com',
                id: 12,
                isVerified: true,
                avatar: 'avatar'
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
                expect(signInSuccess(user)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(signInSuccess(user).payload.user).toEqual(user);
            });
        });
    });
});