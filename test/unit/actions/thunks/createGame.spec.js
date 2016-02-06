import expect from 'expect';
import CreateGame from './../../../../src/shared/actions/thunks/createGame';
import { createGame, __RewireAPI__ as createGameRewireAPI } from './../../../../src/shared/actions/thunks/createGame';

describe('Create Game async action creator', () => {

    let dispatch;
    beforeEach(() => {
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
       expect(createGame()).toBeA('function')
    });
});