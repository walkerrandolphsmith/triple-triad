import expect from 'expect';
import { Map } from 'immutable';
import HandleDown from './handleDown';
import { handleDown, __RewireAPI__ as handleDownRewireAPI } from './handleDown';

describe('HANDLE_DOWN async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleDown()).toBeA('function');
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

        it('should dispatch the getNextSelectedCard action', () => {
            HandleDown.__Rewire__('getNextSelectedCard', () => {
                return 1;
            });
            handleDown()(dispatch, getState);
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
            HandleDown.__Rewire__('getNextSelectedPiece', () => {
                return 2;
            });
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });
    });


});