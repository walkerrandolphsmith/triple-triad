import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import Game from './../../src/server/models/game/game';

describe('/api/createGame', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /createGame given a user id and deck', () => {

        let id, deck;
        beforeEach(() =>  {
            id = '100';
            deck = [{id: 0}, {id: 1}];
        });

        it(`should return a status of 200 OK
                return a game with the owner and deck set to the given owner id and deck
                and a current player set to given owner
                and a phase set to settings-selection`, done => {
            request(app)
                .post('/api/createGame')
                .send({
                    userId: id,
                    deck: deck
                })
                .expect(200)
                .end((err, res) => {
                    expect(res.body.owner).toEqual(id);
                    expect(res.body.currentPlayer).toEqual(id);
                    expect(res.body.deck).toEqual(deck);
                    expect(res.body.phase).toEqual('settingsSelection');
                    done();
                });
        });
    });
});
