import expect from 'expect';
import { Map } from 'immutable';
import { setPhase, selectPiece } from './../../../../src/shared/actions/action-creators/';
import { handleEscape } from './../../../../src/shared/actions/thunks/handleEscape';

describe('HANDLE_ESCAPE async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleEscape()).toBeA('function');
    });

    describe('given it is in the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "pieceSelection"
                })
            });
        });

        it('should dispatch the SET_PHASE action setting the phase to card selection', () => {
            handleEscape()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(setPhase('cardSelection'))
            expect(dispatch).toHaveBeenCalledWith(selectPiece(-1))
        });
    });

});