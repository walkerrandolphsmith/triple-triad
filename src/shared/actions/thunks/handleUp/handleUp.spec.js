import expect from 'expect';
import { Map } from 'immutable';
import { handleUp, __RewireAPI__ } from './handleUp';

describe('src/shared/actions/action-creators/handleUp', () => {
    let getState;
    let dispatch;
    let game;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleUp()).toBeA('function');
    });

    describe('given it is not the piece selection phase', () => {
        beforeEach(() => {
            game = new Map({
                phase: 'cardSelection'
            });
            __RewireAPI__.__Rewire__('getCurrentGame', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_CARD action', () => {
            __RewireAPI__.__Rewire__('getNextSelectedCard', () => 1);
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('given it is the piece selection phase', () => {
        beforeEach(() => {
            game = new Map({
                phase: 'pieceSelection'
            });
            __RewireAPI__.__Rewire__('getCurrentGame', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_PIECE action', () => {
            __RewireAPI__.__Rewire__('getNextSelectedPiece', () => 2);
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});