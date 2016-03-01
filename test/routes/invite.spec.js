import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

describe('/api/invite', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('Given an invalid game id, when POST /invite', () => {

        it('should give a status code 200 Ok', done => {
            request(app)
                .post('/api/invite')
                .send({
                    gameId: 'invalid game token',
                    invitee: 'test@gmail.com',
                    gameOwner: 'invalid owner'
                })
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });
});
