import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import Game from './../../src/server/models/game/game';

describe('/api/getGames', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /getGames given a user id', () => {

        let newGame, id;
        beforeEach(done =>  {
            id = '1';

            newGame = new Game({
                owner: id
            });

            newGame.save(error => { done(); })
        });

        it('should return a status of 200 OK return a collection of games', done => {
            request(app)
                .post('/api/getGames')
                .send({
                    userId: id
                })
                .expect(200)
                .end((err, res) => {
                    expect(res.body[0].owner).toEqual(id);
                    done();
                });
        });
    });
});
