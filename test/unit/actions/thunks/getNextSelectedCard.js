import expect from 'expect';
import { Map, List } from 'immutable';
import GetNextSelectedCard from './../../../../src/shared/actions/thunks/getNextSelectedCard';
import { getNextSelectedCard, __RewireAPI__ as getNextSelectedCardRewireAPI } from './../../../../src/shared/actions/thunks/getNextSelectedCard';

describe('GET_NEXT_SELECTED_CARD async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
        getState = () => ({
            game: new Map({
               deck: new List([])
            })
        });
        dispatch = expect.createSpy();
    });

   it('should be a function', () => {
       expect(getNextSelectedCard('direction')).toBeA('function');
   });

    it('should dispatch the SELECT_CARD action', () => {
        GetNextSelectedCard.__Rewire__('getCardToSelect', function(){
            return new Map({id: 12});
        });

        GetNextSelectedCard.__Rewire__('selectCard', function(){
            return 12;
        });
        getNextSelectedCard('direction')(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(12)
    });

});