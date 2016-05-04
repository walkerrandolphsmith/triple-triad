import expect from 'expect';
import { PASSWORD_RESET_SUCCESS, passwordResetSuccess } from './../index';

describe('src/shared/reducers/passwordReset/actions/passwordResetFailed', () => {
    describe('Given PASSWORD_RESET_SUCCESS action type', () => {
        describe('When invoking the passwordResetSuccess action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: PASSWORD_RESET_SUCCESS
                };
                expect(passwordResetSuccess()).toEqual(expectedAction);
            });
        });
    });
});