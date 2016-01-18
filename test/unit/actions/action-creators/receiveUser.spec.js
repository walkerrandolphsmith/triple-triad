import expect from 'expect';
import { AUTH_SIGNUP_SUCCESS } from './../../../../src/shared/constants/action-types';
import { receiveUser } from './../../../../src/shared/actions/action-creators/receiveUser';

describe('ReceiveSignOut', () => {

    let username;
    beforeEach(() => {
        username = "walker";
    });

    it('should be a function', () => {
        expect(receiveUser).toBeA('function');
    });

    it('should create an action to initiate signing out', () => {

        const expectedAction = {
            type: AUTH_SIGNUP_SUCCESS,
            payload: {
                user: {
                    name: username,
                    id: username
                }
            }
        };
        expect(receiveUser(username)).toEqual(expectedAction)
    });

});