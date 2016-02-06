import expect from 'expect';
import GetGames from './../../../../src/shared/actions/thunks/getGames';
import { getGames, __RewireAPI__ as getGamesRewireAPI } from './../../../../src/shared/actions/thunks/getGames';

describe('Get Games async action creator', () => {

    let dispatch;
    beforeEach(() => {
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
       expect(getGames()).toBeA('function')
    });
});