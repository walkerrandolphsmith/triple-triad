import expect from 'expect';
import GetGames from './getGames';
import { getGames, __RewireAPI__ as getGamesRewireAPI } from './getGames';

describe('Get Games async action creator', () => {

    let dispatch;
    beforeEach(() => {
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
       expect(getGames()).toBeA('function')
    });
});