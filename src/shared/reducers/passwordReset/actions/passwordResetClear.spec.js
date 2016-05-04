import expect from 'expect';
import { PASSWORD_RESET_CLEAR, passwordResetClear } from './../index';

describe('src/shared/reducers/passwordReset/actions/passwordResetClear', () => {
    describe('Given PASSWORD_RESET_CLEAR action type', () => {
        describe('When invoking the passwordResetClear action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: PASSWORD_RESET_CLEAR
                };
                expect(passwordResetClear()).toEqual(expectedAction);
            });
        });
    });
});