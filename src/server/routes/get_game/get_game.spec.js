import expect from 'expect';
import { getGame, __RewireAPI__ } from './get_game';
describe('getGame', () => {
    let req;
    let res;
    let status;
    let send;
    describe('Given a request containing a game id and a response', () => {
        describe('When retrieving a game by id', () => {
            let findById;
            beforeEach(() => {
                findById = expect.createSpy();
                __RewireAPI__.__Rewire__('Game', {
                    findById: findById
                });

                req = {
                    body: {
                        gameId: 20
                    }
                };

                res = {};
            });

            it('should attempt to findById a game for that id', () => {
                getGame(req, res);
                expect(findById).toHaveBeenCalled();
            });
        });

        describe('When retrieving game is successful', () => {
            let game;
            beforeEach(() => {
                game = { _id: 1};
                __RewireAPI__.__Rewire__('Game', {
                    findById: (id, fn) => {
                        fn(null, game)
                    }
                });

                req = {
                    body: {
                        gameId: 20
                    }
                };

                send = expect.createSpy();

                res = {
                    status: () => ({
                        send: send
                    })
                };

                status = expect.spyOn(res, 'status').andCallThrough();
            });

            it('should return the game in the 200 response', () => {
                getGame(req, res);
                expect(status).toHaveBeenCalledWith(200);
                expect(send).toHaveBeenCalledWith(game);
            });
        });

        describe('When retrieving a game throws an error', () => {
            beforeEach(() => {
                __RewireAPI__.__Rewire__('Game', {
                    findById: (schema, fn) => {
                        fn(new Error(), {})
                    }
                });

                req = {
                    body: {
                        gameId: 20
                    }
                };

                send = expect.createSpy();

                res = {
                    status: () => ({
                        send: send
                    })
                };

                status = expect.spyOn(res, 'status').andCallThrough();
            });

            it('should return a 500 response', () => {
                getGame(req, res);
                expect(status).toHaveBeenCalledWith(500);
                expect(send).toHaveBeenCalled();
            });
        });
    });
});