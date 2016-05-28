import expect from 'expect';
import { Map } from 'immutable';
import { UserRecord } from './../records';
import { avatarUpdated } from './avatarUpdated';

describe('src/shared/reducers/auth/mutations/avatarUpdated', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                user: new UserRecord()
            });
        });

        describe('When updating avatar succeeds', () => {
            let actual;
            let payload;
            beforeEach(() => {
                payload = {
                    avatar: 'avatar'
                };
                actual = avatarUpdated(state, payload);
            });

            it('should set the user avatar to the payloads avatar', () => {
                expect(actual.get('user').avatar).toEqual(payload.avatar);
            });
        });
    });
});