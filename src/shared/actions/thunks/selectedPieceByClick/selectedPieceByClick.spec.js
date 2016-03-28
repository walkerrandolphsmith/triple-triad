import expect from 'expect';
import { selectedPieceByClick, __RewireAPI__ } from './selectedPieceByClick';

describe('SELECTED_PIECE_BY_CLICK async action creator', () => {
    let getState;
    let dispatch;
    let index;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        index = 0;
    });

    it('should be a function', () => {
        expect(selectedPieceByClick(index)).toBeA('function');
    });

    it('should dispatch getNextSelectedCard action', () => {
        __RewireAPI__.__Rewire__('selectPiece', () => 1);
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(1);
    });

    it('should dispatch PLayerTakesTurn action', () => {
        __RewireAPI__.__Rewire__('playerTakesTurn', () => 2);
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(2);
    });

    it('should dispatch SET_PHASE action', () => {
        __RewireAPI__.__Rewire__('setPhase', () => 3);
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(3);
    });
});