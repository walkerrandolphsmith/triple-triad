import expect from 'expect';
import { EMAIL_VERIFIED, verifyEmailSuccess } from './../index';

describe('src/shared/reducers/actions/emailVerified', () => {
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
                expect(verifyEmailSuccess(isVerified)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload isVerified field', () => {
                expect(verifyEmailSuccess(isVerified).payload.isVerified).toEqual(isVerified);
            });
        });
    });
});