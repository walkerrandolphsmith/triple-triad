import expect from 'expect';
import { EMAIL_VERIFIED } from './../../../constants/actionTypes';
import { emailVerified } from './emailVerified';

describe('src/shared/actions/action-creators/emailVerified', () => {
    describe('Given EMAIL_VERIFIED action type', () => {
        let isVerified;
        let expectedAction;
        beforeEach(() => {
            isVerified = false;
            expectedAction = {
                type: EMAIL_VERIFIED,
                payload: {
                    isVerified: isVerified
                }
            };
        });

        describe('When invoking the emailVerified action creator', () => {
            it('should create an action', () => {
                expect(emailVerified(isVerified)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload isVerified field', () => {
                expect(emailVerified(isVerified).payload.isVerified).toEqual(isVerified);
            });
        });
    });
});