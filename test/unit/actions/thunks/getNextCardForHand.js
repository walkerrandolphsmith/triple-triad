import expect from 'expect';
import { Map, List } from 'immutable';
import GetNextCardForHand from './../../../../src/shared/actions/thunks/getNextCardForHand';
import { getNextCardForHand, __RewireAPI__ as getNextCardForHandRewireAPI } from './../../../../src/shared/actions/thunks/getNextCardForHand';

describe('GET_NEXT_CARD_FOR_HAND async action creator', () => {

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
       expect(getNextCardForHand('direction')).toBeA('function');
   });

    it('should dispatch the SELECT_CARD action', () => {
        GetNextCardForHand.__Rewire__('getCardToAdd', function(){
            return new Map({id: 12});
        });

        GetNextCardForHand.__Rewire__('selectCard', function(){
            return 12;
        });
        getNextCardForHand()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(12)
    });

});