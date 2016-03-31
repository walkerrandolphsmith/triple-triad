import expect from 'expect';
import { PASSWORD_RESET_CLEAR } from './../../../../constants/actionTypes';
import { passwordResetClear } from './passwordResetClear';

describe('Given PASSWORD_RESET_CLEAR action type, When invoking the passwordResetClear action creator', () => {
    it('should create an action', () => {
        const expectedAction = {
            type: PASSWORD_RESET_CLEAR
        };
        expect(passwordResetClear()).toEqual(expectedAction);
    });
});