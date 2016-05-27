import expect from 'expect';
import { Map } from 'immutable';
import { createGame, __RewireAPI__ } from './createGame';

describe('src/shared/reducers/game/thunks/createGame', () => {
    let dispatch;
    let getState;
    let ownerId;
    beforeEach(() => {
        __RewireAPI__.__Rewire__('GameRecord', () => 1);
        ownerId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: ownerId
                })
            })
        });
    });

    it('should be a function', () => {
        expect(createGame()).toBeA('function');
    });
});