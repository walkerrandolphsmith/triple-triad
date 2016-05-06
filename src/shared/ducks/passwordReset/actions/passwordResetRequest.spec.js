import expect from 'expect';
import { PASSWORD_RESET_REQUEST, passwordResetRequest } from './../index';

describe('src/shared/reducers/passwordReset/actions/passwordResetRequest', () => {
    describe('Given PASSWORD_RESET_REQUEST action type', () => {
        describe('When invoking the passwordResetRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: PASSWORD_RESET_REQUEST
                };
                expect(passwordResetRequest()).toEqual(expectedAction);
            });
        });
    });
});