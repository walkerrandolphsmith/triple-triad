import expect from 'expect';
import { EMAIL_VERIFIED } from './../../../../src/shared/constants/actionTypes'
import { emailVerified } from './../../../../src/shared/actions/action-creators/';

describe('EMAIL VERIFIED', () => {

    describe('Given the email is verified', () => {

        let isVerified;
        beforeEach(() => {
            isVerified = true;
        });

        it('should create an action to set user email to verified', () => {
            const expectedAction = {
                type: EMAIL_VERIFIED,
                payload: {
                    isVerified: isVerified
                }
            };
            expect(emailVerified(isVerified)).toEqual(expectedAction)
        });
    });

    describe('Given the email is not verified', () => {

        let isVerified;
        beforeEach(() => {
            isVerified = false;
        });

        it('should create an action to set user email to not verfied', () => {
            const expectedAction = {
                type: EMAIL_VERIFIED,
                payload: {
                    isVerified: isVerified
                }
            };
            expect(emailVerified(isVerified)).toEqual(expectedAction)
        });
    });

});