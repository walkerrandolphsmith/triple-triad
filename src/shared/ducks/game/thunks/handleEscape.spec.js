import expect from 'expect';
import { handleEscape, __RewireAPI__ } from './handleEscape';
import PHASE from './../../../constants/phases';
import { GameRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/thunks/handleEscape', () => {
    let getState;
    let dispatch;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        let game = new GameRecord ({
            phase: PHASE.PIECE_SELECTION
        });
        __RewireAPI__.__Rewire__('currentGameSelector', () => game);
    });

    it('should be a function', () => {
        expect(handleEscape()).toBeA('function');
    });

    describe('given it is in the piece selection phase', () => {
        it('should dispatch the SET_PHASE action', () => {
            __RewireAPI__.__Rewire__('setPhase', () => 1);
            handleEscape()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch the SELECT_PIECE action', () => {
            __RewireAPI__.__Rewire__('selectPiece', () => 2);
            handleEscape()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});