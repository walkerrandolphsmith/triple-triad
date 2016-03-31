import expect from 'expect';
import { PASSWORD_RESET_FAILED } from './../../../../constants/actionTypes';
import { passwordResetFailed } from './passwordResetFailed';

describe('Given PASSWORD_RESET_FAILURE action type, When invoking the passwordResetFailed action creator', () => {
    it('should create an action', () => {
        const expectedAction = {
            type: PASSWORD_RESET_FAILED
        };
        expect(passwordResetFailed()).toEqual(expectedAction);
    });
});