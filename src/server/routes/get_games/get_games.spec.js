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
});