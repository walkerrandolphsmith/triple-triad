import expect from 'expect';
import { Map } from 'immutable';
import { handleEnter, setPhase } from './../../../../src/shared/action-creators/';

describe('HANDLE_ENTER async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleEnter()).toBeA('function');
    });

    describe('given it is not the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "cardSelection"
                })
            });
        });

        it('should dispatch the SET_PHASE action setting the phase to pieceSelection', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(setPhase('pieceSelection'))
        });
    });

});