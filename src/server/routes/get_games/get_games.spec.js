import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

import Game from './../../models/game/game';

describe('/api/get_games', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /get_games given a user id', () => {

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
                .post('/api/get_games')
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
