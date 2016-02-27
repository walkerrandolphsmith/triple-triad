import expect from 'expect';
import mongoose from 'mongoose';
import connectionManager from './../connectionManager';
import Token from './../../src/server/models/token/token';

describe('Tokens', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('new user token', () => {

        let userId;
        beforeEach(() => {
            userId = '000000000000000000000001';
        });

        it('should generate a token containing the user id', () => {

        });
    });
});