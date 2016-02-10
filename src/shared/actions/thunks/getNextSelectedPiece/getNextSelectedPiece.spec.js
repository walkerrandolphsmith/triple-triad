import expect from 'expect';
import { Map, List } from 'immutable';
import GetNextSelectedPiece from './getNextSelectedPiece';
import { getNextSelectedPiece, __RewireAPI__ as getNextSelectedPieceRewireAPI } from './getNextSelectedPiece';

describe('GET_NEXT_SELECTED_PIECE async action creator', () => {

    let getState, dispatch, keyCode;
    beforeEach(() => {
        keyCode = 13;
        getState = () => ({
            game: new Map({
               deck: new List([])
            })
        });
        dispatch = expect.createSpy();
    });

   it('should be a function', () => {
       expect(getNextSelectedPiece(keyCode)).toBeA('function');
   });

    it('should dispatch the SELECT_PIECE action', () => {
        GetNextSelectedPiece.__Rewire__('getPieceToSelect', function(){
            return 1;
        });

        GetNextSelectedPiece.__Rewire__('selectPiece', function(){
            return 2;
        });

        getNextSelectedPiece(keyCode)(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(2)
    });

});