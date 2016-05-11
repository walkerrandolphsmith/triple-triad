import expect from 'expect';
import { Map } from 'immutable';
import { createGame, __RewireAPI__ } from './createGame';

describe('src/shared/reducers/game/thunks/createGame', () => {
    let dispatch;
    let getState;
    let deck;
    let phase;
    let ownerId;
    beforeEach(() => {
        deck = [1, 2, 3];
        phase = 'S';
        __RewireAPI__.__Rewire__('deck', deck);
        __RewireAPI__.__Rewire__('PHASES', { SETTINGS_SELECTION: phase });
        ownerId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: ownerId
                })
            })
        });

        __RewireAPI__.__Rewire__('createGameRequest', () => 1);
        __RewireAPI__.__Rewire__('createGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('createGameFailure', () => 3);
    });

    it('should be a function', () => {
        expect(createGame()).toBeA('function');
    });
});