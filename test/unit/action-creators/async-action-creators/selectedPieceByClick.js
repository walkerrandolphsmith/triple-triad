import expect from 'expect';
import { selectedPieceByClick, playerTakesTurn } from './../../../../src/shared/action-creators/';

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
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'SelectPiece',
            payload: {
                index: index
            }
        })
    });

    it('should dispatch NEXT_STEP action', () => {
        selectedPieceByClick(index)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(playerTakesTurn())
    });
});