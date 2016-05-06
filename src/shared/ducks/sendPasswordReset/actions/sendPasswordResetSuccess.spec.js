import expect from 'expect';
import { SEND_PASSWORD_RESET_SUCCESS, sendPasswordResetSuccess } from './../index';

describe('src/shared/reducers/sendPasswordReset/actions/sendPasswordResetSuccess', () => {
    describe('Given SEND_PASSWORD_RESET_SUCCESS action type', () => {
        describe('When invoking the sendPasswordResetSuccess action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET_SUCCESS
                };
                expect(sendPasswordResetSuccess()).toEqual(expectedAction);
            });
        });
    });
});