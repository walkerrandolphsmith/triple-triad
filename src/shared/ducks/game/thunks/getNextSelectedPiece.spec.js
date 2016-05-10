import expect from 'expect';
import { getNextSelectedPiece, __RewireAPI__ } from './getNextSelectedPiece';

describe('src/shared/reducers/game/thunks/getNextSelectedPiece', () => {
    let getState;
    let dispatch;
    let keyCode;
    beforeEach(() => {
        keyCode = 13;
        getState = () => ({});
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('currentGameSelector', () => 'game');
        __RewireAPI__.__Rewire__('getPieceToSelect', () => 1);
        __RewireAPI__.__Rewire__('selectPiece', () => 2);
    });

    it('should be a function', () => {
        expect(getNextSelectedPiece(keyCode)).toBeA('function');
    });

    it('should dispatch the SELECT_PIECE action', () => {
        getNextSelectedPiece(keyCode)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(2);
    });
});