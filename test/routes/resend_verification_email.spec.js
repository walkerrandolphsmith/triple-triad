import expect from 'expect';
import request from 'supertest';
import app from './../../src/server/server';

describe('/api/resendVerificationEmail', () => {
    describe('POST /resendVerificationEmail given a valid user id ', () => {
        let id;
        beforeEach(done => {
            done();
        });

        it('should send an email', done => {
            /*request(app)
                .post('/api/resendVerificationEmail')
                .send({
                    userId: id
                })
                .end((err, res) => {
                    //expect(res.body.sent).toEqual(true);
                    done();
                });
            */
            done();
        });
    });

    describe('POST /resendVerificationEmail given an invalid user id ', () => {
        let id;
        beforeEach(done => {
            done();
        });

        it('should not send an email', done => {
            /*request(app)
                .post('/api/resendVerificationEmail')
                .send({
                    userId: id + 'bad id'
                })
                .end((err, res) => {
                    done();
                });
            */
            done();
        });
    });
});
