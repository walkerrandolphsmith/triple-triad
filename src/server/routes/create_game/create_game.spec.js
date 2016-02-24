import expect from 'expect';
import Create_Game from './create_game';
import { create_game, __RewireAPI__ as create_gameRewireAPI } from './create_game';

describe.only("create_game", () => {
   let save;
   beforeEach(() => {

   });

    describe('Given a userId and deck in the request body, when creating a new game', () => {

        let save, req, res;
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
            create_game(req, res);
            expect(save).toHaveBeenCalled();
        });
    });


    describe('Given a userId and deck in the request body, when creating a new game without error', () => {

        let status, send, newGame, req, res;
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
            create_game(req, res);
            expect(status).toHaveBeenCalledWith(200);
            expect(send).toHaveBeenCalledWith(newGame);
        });
    });


    describe('Given a userId and deck in the request body, when creating a new game with error', () => {

        let status, send, req, res;
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
            create_game(req, res);
            expect(status).toHaveBeenCalledWith(500);
            expect(send).toHaveBeenCalled();
        });
    });
});