import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

describe('/api/invite', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('Given a valid email, when POST /invite', () => {
        it('should give a status code 200 Ok', done => {
            request(app)
                .post('/api/invite')
                .send({
                    email: 'test@gmail.com'
                })
                .expect(200)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });
});
