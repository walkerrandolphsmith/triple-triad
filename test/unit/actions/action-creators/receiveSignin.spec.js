import expect from 'expect';
import { AUTH_SIGNIN_SUCCESS } from './../../../../src/shared/constants/actionTypes';
import { receiveSignIn } from './../../../../src/shared/actions/action-creators/receiveSignIn';

describe('ReceiveSignIn', () => {

    let username;
    beforeEach(() => {
        username = "walker";
    });

    it('should be a function', () => {
        expect(receiveSignIn).toBeA('function');
    });

    it('should create an action to initiate signing in', () => {

        const expectedAction = {
            type: AUTH_SIGNIN_SUCCESS,
            payload: {
                user: {
                    name: username,
                    id: username
                }
            }
        };
        expect(receiveSignIn(username)).toEqual(expectedAction)
    });

});