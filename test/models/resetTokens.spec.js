import expect from 'expect';
import mongoose from 'mongoose';
import connectionManager from './../connectionManager';
import ResetToken from './../../src/server/models/resetTokens/resetTokens';

describe('Reset tokens', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('new reset password token', () => {

        let userId;
        beforeEach(() => {
            userId = '000000000000000000000001';
        });

        it('should generate a token containing the user id', () => {

        });
    });
});