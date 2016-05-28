import expect from 'expect';
import { Map } from 'immutable';
import { signOutSucceeded } from './signOutSucceeded';
import { UserRecord } from './../records';

describe('src/shared/reducers/auth/mutations/signOutSucceeded', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingOut: false,
                user: new UserRecord()
            });
        });

        describe('When signining out is successful', () => {
            let actual;
            beforeEach(() => {
                actual = signOutSucceeded(state);
            });

            it('should set the signingOut state to false', () => {
                expect(actual.get('signingOut')).toEqual(false);
            });

            it('should set the username to null', () => {
                expect(actual.get('user').username).toEqual(null);
            });

            it('should set the user id to null', () => {
                expect(actual.get('user').id).toEqual(null);
            });
        });
    });
});