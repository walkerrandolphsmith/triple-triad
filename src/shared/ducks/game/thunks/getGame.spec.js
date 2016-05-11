import expect from 'expect';
import { Map } from 'immutable';
import { getGame, __RewireAPI__ } from './getGame';

describe('src/shared/reducers/game/thunks/getGame', () => {
    let dispatch;
    let getState;
    let gameId;
    beforeEach(() => {
        gameId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: gameId
                })
            })
        });

        __RewireAPI__.__Rewire__('getGameRequest', () => 1);
        __RewireAPI__.__Rewire__('getGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('getGameFailure', () => 3);
    });

    it('should be a function', () => {
        expect(getGame(gameId)).toBeA('function');
    });
});