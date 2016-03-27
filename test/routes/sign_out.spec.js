import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

describe('/api/signOut', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /signOut', () => {

        it('should return a status 200 OK', done => {
            request(app)
                .post('/api/signOut')
                .expect(200)
                .end((err, res) => {
                    done();
                });
        });
    });
});
