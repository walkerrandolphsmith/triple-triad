import expect from 'expect';
import UserToken from './../../../src/server/models/userTokens';

describe('User tokens', () => {

    describe('new user token', () => {

        let userId;
        beforeEach(() => {
            userId = '000000000000000000000001';
        });

        it('should generate a token contaning the user id', () => {
            UserToken.new(userId, (err, userToken) => {
                expect.toNotExist(err);
                expect.toExist(userToken.token);
                expect(userToken.userId.toString()).toEqual(userId);
            });
        });
    });
});