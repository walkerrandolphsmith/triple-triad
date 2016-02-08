import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../../src/server/server';

describe('/api/sing_out', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /sign_out', () => {

        it('should return a status 200 OK', done => {
            request(app)
                .post('/api/sign_out')
                .expect(200)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });
});
