import expect from 'expect';
import { AUTH_SIGNUP_SUCCESS } from './../../../../constants/actionTypes';
import { receiveUser } from './receiveUser';

describe('ReceiveSignUp', () => {
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
                user: {
                    name: user.name,
                    id: user.id
                }
            }
        };
    });

    it('should be a function', () => {
        expect(receiveUser).toBeA('function');
    });

    it('should create an action to initiate signing out', () => {
        expect(receiveUser(user)).toEqual(expectedAction);
    });
});