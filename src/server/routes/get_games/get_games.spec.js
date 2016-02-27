import expect from 'expect';
import Get_Games from './get_games';
import { get_games, __RewireAPI__ as get_gamesRewireAPI } from './get_games';

describe('get_games', () => {

    let req, res;

    describe('Given a request containing a user id and a response, when retrieving games for associated with a user', () => {

        let find;
        beforeEach(() => {
            find = expect.createSpy();
            Get_Games.__Rewire__('Game', {
                find: find
            });

            req = {
                body: {
                    userId: 20
                }
            };

            res = {};
        });

        it('should attempt to find a game for that user', () => {
           get_games(req, res);
           expect(find).toHaveBeenCalled();
        });
    });

    describe('Given a request containing a user id, when retrieving games for associated with a user throws an error', () => {

        let games, send, status;
        beforeEach(() => {

            games = [1,2,3,4];
            Get_Games.__Rewire__('Game', {
                find: (schema, fn) => {
                    fn(null, games)
                }
            });

            req = {
                body: {
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

        it('should attempt to find a game for that user', () => {
            get_games(req, res);
            expect(status).toHaveBeenCalledWith(200);
            expect(send).toHaveBeenCalledWith(games)
        });
    });

    describe('Given a request containing a user id, when retrieving games for associated with a user throws an error', () => {

        let send, status;
        beforeEach(() => {

            Get_Games.__Rewire__('Game', {
                find: (schema, fn) => {
                    fn(new Error(), {})
                }
            });

            req = {
                body: {
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

        it('should attempt to find a game for that user', () => {
            get_games(req, res);
            expect(status).toHaveBeenCalledWith(500);
            expect(send).toHaveBeenCalled()
        });
    });
});