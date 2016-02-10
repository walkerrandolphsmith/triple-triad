import expect from 'expect';
import SelectedPieceByClick from './selectedPieceByClick';
import { selectedPieceByClick, __RewireAPI__ as selectedPieceByClickRewireAPI } from './selectedPieceByClick';

describe('SELECTED_PIECE_BY_CLICK async action creator', () => {

    let getState, dispatch, index;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
       index = 0;
    });

    it('should be a function', () => {
        expect(selectedPieceByClick(index)).toBeA('function');
    });

    it('should dispatch getNextSelectedCard action', () => {
        SelectedPieceByClick.__Rewire__('selectPiece', function(){
            return 1;
        });
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(1)
    });

    it('should dispatch PLayerTakesTurn action', () => {
        SelectedPieceByClick.__Rewire__('playerTakesTurn', function(){
            return 2;
        });
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(2)
    });

    it('should dispatch SET_PHASE action', () => {
        SelectedPieceByClick.__Rewire__('setPhase', function(){
            return 3;
        });
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(3)
    });
});