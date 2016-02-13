import expect from 'expect';
import {  PASSWORD_RESET_REQUEST } from './../../../../constants/actionTypes';
import { passwordResetRequest } from './passwordResetRequest';

describe('Given PASSWORD_RESET_REQUEST action type, When invoking the passwordResetRequest action creator', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: PASSWORD_RESET_REQUEST
        };
        expect(passwordResetRequest()).toEqual(expectedAction)
    });

});