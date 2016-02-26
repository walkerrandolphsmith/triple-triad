import expect from 'expect';
import { Map } from 'immutable';
import HandleEscape from './handleEscape';
import { handleEscape, __RewireAPI__ as handleEscapeRewireAPI } from './handleEscape';

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

        it('should dispatch the SET_PHASE action', () => {
            HandleEscape.__Rewire__('setPhase', () => {
                return 1;
            });
            handleEscape()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch the SELECT_PIECE action', () => {
            HandleEscape.__Rewire__('selectPiece', () => {
                return 2;
            });
            handleEscape()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });
    });

});