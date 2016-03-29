import expect from 'expect';
import { Map, List } from 'immutable';
import { getNextSelectedPiece, __RewireAPI__ } from './getNextSelectedPiece';

describe('GET_NEXT_SELECTED_PIECE async action creator', () => {
    let getState;
    let dispatch;
    let keyCode;
    beforeEach(() => {
        keyCode = 13;
        getState = () => ({
            game: new Map({
               deck: new List([])
            })
        });
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getPieceToSelect', () => 1);
        __RewireAPI__.__Rewire__('selectPiece', () => 2);
    });

    it('should be a function', () => {
        expect(getNextSelectedPiece(keyCode)).toBeA('function');
    });

    it('should dispatch the SELECT_PIECE action', () => {
        getNextSelectedPiece(keyCode)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(2);
    });
});