import expect from 'expect';
import { AUTH_LOAD_SUCCESS } from './../../../../src/shared/constants/action-types';
import ReceiveAuth from './../../../../src/shared/actions/action-creators/receiveAuth';
import { receiveAuth, __RewireAPI__ as receiveAuthRewireAPI } from './../../../../src/shared/actions/action-creators/receiveAuth';

describe('RECEIVE_AUTH', () => {

    it('should be a function', () => {
        expect(receiveAuth).toBeA('function');
    });

    it('should create an action to initiate authentication', () => {

        const cookie = ReceiveAuth.__Rewire__('cookie', {
            load: () => { return 'xxx' }
        });

        const expectedAction = {
            type: AUTH_LOAD_SUCCESS,
            payload: {
                user: 'xxx'
            }
        };
        expect(receiveAuth()).toEqual(expectedAction)
    });

});