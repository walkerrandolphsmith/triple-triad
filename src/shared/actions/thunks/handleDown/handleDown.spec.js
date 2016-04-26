import expect from 'expect';
import { Map, List } from 'immutable';
import { handleDown, __RewireAPI__ } from './handleDown';

describe('HANDLE_DOWN async action creator', () => {
    let getState;
    let dispatch;
    let game;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        game = new Map({ phase: 'comePhase' });
        __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        __RewireAPI__.__Rewire__('getNextSelectedCard', () => 1);
        __RewireAPI__.__Rewire__('getNextSelectedPiece', () => 2);
    });

    it('should be a function', () => {
        expect(handleDown()).toBeA('function');
    });

    describe('given it is not the piece selection phase', () => {
        beforeEach(() => {
            game = new Map({ phase: 'cardSelection' });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the getNextSelectedCard action', () => {
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('given it is the piece selection phase', () => {
        beforeEach(() => {
            game = new Map({ phase: 'pieceSelection' });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_PIECE action', () => {
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});