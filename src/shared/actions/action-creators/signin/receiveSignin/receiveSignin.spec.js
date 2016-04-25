import expect from 'expect';
import { AUTH_SIGNIN_SUCCESS } from './../../../../constants/actionTypes';
import { receiveSignIn } from './receiveSignIn';

describe('src/shared/actions/action-creators/signin/receiveSignIn', () => {
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