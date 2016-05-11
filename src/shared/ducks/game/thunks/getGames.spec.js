import expect from 'expect';
import { Map } from 'immutable';
import { getGames, __RewireAPI__ } from './getGames';

describe('src/shared/reducers/game/thunks/getGames', () => {
    let dispatch;
    let getState;
    let ownerId;
    beforeEach(() => {
        ownerId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: ownerId
                })
            })
        });

        __RewireAPI__.__Rewire__('getGamesRequest', () => 1);
        __RewireAPI__.__Rewire__('getGamesSuccess', () => 2);
        __RewireAPI__.__Rewire__('getGamesFailure', () => 3);
    });

    it('should be a function', () => {
        expect(getGames()).toBeA('function');
    });
});