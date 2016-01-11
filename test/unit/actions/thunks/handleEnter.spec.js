import expect from 'expect';
import { Map } from 'immutable';
import { setPhase, selectPiece } from './../../../../src/shared/actions/action-creators/';
import { handleEnter } from './../../../../src/shared/actions/thunks/handleEnter';
import { getNextSelectedPiece } from './../../../../src/shared/actions/thunks/getNextSelectedPiece';
import { playerTakesTurn } from './../../../../src/shared/actions/thunks/playerTakesTurn';

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

        it('should dispatch the getNextSelectedPiece action to set the board with a selected piece', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(getNextSelectedPiece());
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
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(playerTakesTurn(true));
        });

        it('should dispatch the SET_PHASE action setting the phase to cardSelection', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(setPhase('cardSelection'))
        });
    });

});