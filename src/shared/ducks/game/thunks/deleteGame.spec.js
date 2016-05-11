import expect from 'expect';
import { deleteGame, __RewireAPI__ } from './deleteGame';

describe('src/shared/reducers/game/thunks/deleteGame', () => {
    let dispatch;
    let id;
    beforeEach(() => {
        id = 20;
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('deleteGameRequest', () => 1);
        __RewireAPI__.__Rewire__('deleteGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('deleteGameFailure', () => 3);
    });

    it('should be a function', () => {
        expect(deleteGame()).toBeA('function');
    });
});