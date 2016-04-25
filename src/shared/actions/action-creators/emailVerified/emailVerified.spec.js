import expect from 'expect';
import { EMAIL_VERIFIED } from './../../../constants/actionTypes';
import { emailVerified } from './emailVerified';

describe('src/shared/actions/action-creators/emailVerified', () => {
    let isVerified;
    let expectedAction;
    describe('Given the email is verified', () => {
        it('should create an action to set user email to verified', () => {
            isVerified = true;
            expectedAction = {
                type: EMAIL_VERIFIED,
                payload: {
                    isVerified: isVerified
                }
            };
            expect(emailVerified(isVerified)).toEqual(expectedAction);
        });
    });

    describe('Given the email is not verified', () => {
        it('should create an action to set user email to not verfied', () => {
            isVerified = false;
            expectedAction = {
                type: EMAIL_VERIFIED,
                payload: {
                    isVerified: isVerified
                }
            };
            expect(emailVerified(isVerified)).toEqual(expectedAction);
        });
    });
});