import expect from 'expect';
import Create_Game from './create_game';
import { createGame, __RewireAPI__ as create_gameRewireAPI } from './create_game';

describe('createGame', () => {
    let req;
    let res;
    let status;
    let send;
    describe('Given a userId and deck in the request body, when creating a new game', () => {
        let save;
        beforeEach(() => {

            save = expect.createSpy();
            Create_Game.__Rewire__('Game', () => {
                return {
                    save: save
                }
            });

            req = {
                body: {
                    deck: [],
                    userId: 20
                }
            };

            res = {
                status: () => ({
                    send: () => {}
                })
            };
        });

        it('should call the game\'s save function', () => {
            createGame(req, res);
            expect(save).toHaveBeenCalled();
        });
    });


    describe('Given a userId and deck in the request body, when creating a new game without error', () => {
        let newGame;
        beforeEach(() => {

            newGame = { id: 20 };

            Create_Game.__Rewire__('Game', () => {
                return {
                    save: (fn) => {
                        fn(null, newGame)
                    }
                }
            });

            req = {
                body: {
                    deck: [],
                    userId: 20
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

        it('should call save\'s callback responding with a status of 200 and the newGame', () => {
            createGame(req, res);
            expect(status).toHaveBeenCalledWith(200);
            expect(send).toHaveBeenCalledWith(newGame);
        });
    });


    describe('Given a userId and deck in the request body, when creating a new game with error', () => {
        beforeEach(() => {
            Create_Game.__Rewire__('Game', () => {
                return {
                    save: (fn) => {
                        fn(new Error(), {})
                    }
                }
            });

            req = {
                body: {
                    deck: [],
                    userId: 20
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

        it('should call save\'s callback responding with a status of 500', () => {
            createGame(req, res);
            expect(status).toHaveBeenCalledWith(500);
            expect(send).toHaveBeenCalled();
        });
    });
});