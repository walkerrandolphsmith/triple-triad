import expect from 'expect';
import { Map } from 'immutable';
import HandleEnter from './../../../../src/shared/actions/thunks/handleEnter';
import { handleEnter, __RewireAPI__ as handleEnterRewireAPI } from './../../../../src/shared/actions/thunks/handleEnter';

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
            HandleEnter.__Rewire__('setPhase', function(){
                return 1;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)

        });

        it('should dispatch the getNextSelectedPiece action to set the board with a selected piece', () => {
            HandleEnter.__Rewire__('getNextSelectedPiece', function(){
                return 2;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('given it is the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "pieceSelection",
                    selectedPiece: 0
                })
            });
        });

        it('should dispatch the PlayerTakesTurn action', () => {
            HandleEnter.__Rewire__('playerTakesTurn', function(){
                return 3;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch the SET_PHASE action setting the phase to cardSelection', () => {
            HandleEnter.__Rewire__('setPhase', function(){
                return 4;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });
    });

});