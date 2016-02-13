import expect from 'expect';
import { Map } from 'immutable';
import HandleUp from './handleUp';
import { handleUp, __RewireAPI__ as handleUpRewireAPI } from './handleUp';

describe('HANDLE_UP async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleUp()).toBeA('function');
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

        it('should dispatch the GET_NEXT_SELECTED_CARD action', () => {
            HandleUp.__Rewire__('getNextSelectedCard', function(){
                return 1;
            });
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });
    });

    describe('given it is the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "pieceSelection"
                })
            });
        });

        it('should dispatch the GET_NEXT_SELECTED_PIECE action', () => {
            HandleUp.__Rewire__('getNextSelectedPiece', function(){
                return 2;
            });
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });
    });

});