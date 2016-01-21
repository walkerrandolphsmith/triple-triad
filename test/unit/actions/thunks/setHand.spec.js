import expect from 'expect';
import { Map, List } from 'immutable';
import SetHand from './../../../../src/shared/actions/thunks/setHand';
import { setHand, __RewireAPI__ as setHandRewireAPI } from './../../../../src/shared/actions/thunks/setHand';

describe('SET_HAND async action creator', () => {

    let dispatch, getState, player, opponent;
    beforeEach(() => {
       player = 1;
       opponent = 2;
       dispatch = expect.createSpy();
        getState = () => ({})
    });

    it('should be a function', () => {
       expect(setHand()).toBeA('function');
    });

    it('should dispatch ADD_CARD action for each card in hand', () => {
        SetHand.__Rewire__('getRandomHand', function(){
            return new List([
                new Map({id: 1, name: '1', owner: 1, boardIndex: -1}),
                new Map({id: 2, name: '2', owner: 1, boardIndex: -1}),
                new Map({id: 3, name: '3', owner: 1, boardIndex: -1}),
                new Map({id: 4, name: '4', owner: 1, boardIndex: -1}),
                new Map({id: 5, name: '5', owner: 1, boardIndex: -1})
            ]);
        });
        SetHand.__Rewire__('addCard', function(){
            return 1;
        });

        setHand()(dispatch, getState);
        expect(dispatch.calls.length).toEqual(5)
        expect(dispatch.calls[0].arguments).toEqual([1])
    });

});