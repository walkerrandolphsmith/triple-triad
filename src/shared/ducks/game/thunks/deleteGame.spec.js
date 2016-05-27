import expect from 'expect';
import { deleteGame, __RewireAPI__ } from './deleteGame';

describe('src/shared/reducers/game/thunks/deleteGame', () => {
    let dispatch;
    let id;
    beforeEach(() => {
        id = 20;
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(deleteGame()).toBeA('function');
    });
});