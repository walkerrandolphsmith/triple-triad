import expect from 'expect';
import { AUTH_SIGNIN_SUCCESS } from './../../../../constants/actionTypes';
import { receiveSignIn } from './receiveSignIn';

describe('ReceiveSignIn', () => {
    let user;
    let expectedAction;
    beforeEach(() => {
        user = {
            name: "walker",
            id: 12
        };
        expectedAction = {
            type: AUTH_SIGNIN_SUCCESS,
            payload: {
                user: {
                    name: user.name,
                    id: user.id
                }
            }
        };
    });

    it('should be a function', () => {
        expect(receiveSignIn).toBeA('function');
    });

    it('should create an action to initiate signing in', () => {
        expect(receiveSignIn(user)).toEqual(expectedAction);
    });
});