import expect from 'expect';
import { SEND_PASSWORD_RESET_REQUEST, sendPasswordResetRequest } from './../index';

describe('src/shared/reducers/sendPasswordReset/actions/sendPasswordResetRequest', () => {
    describe('Given SEND_PASSWORD_RESET action type', () => {
        describe('When invoking the sendPasswordResetRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET_REQUEST
                };
                expect(sendPasswordResetRequest()).toEqual(expectedAction);
            });
        });
    });
});