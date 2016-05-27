import expect from 'expect';
import { handleUp, __RewireAPI__ } from './handleUp';
import PHASE from './../../../constants/phases';
import { GameRecord } from './../../../constants/records';

describe('src/shared/reducers/game/thunks/handleUp', () => {
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
            game = new GameRecord({
                phase: PHASE.CARD_SELECTION
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_CARD action', () => {
            __RewireAPI__.__Rewire__('selectNextCard', () => 1);
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('given it is the piece selection phase', () => {
        beforeEach(() => {
            game = new GameRecord({
                phase: PHASE.PIECE_SELECTION
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_PIECE action', () => {
            __RewireAPI__.__Rewire__('selectNextPiece', () => 2);
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});