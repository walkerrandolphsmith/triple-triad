import expect from 'expect';
import { Map, List } from 'immutable';
import { getNextCardForHand, __RewireAPI__ } from './getNextCardForHand';

describe.only('GET_NEXT_CARD_FOR_HAND async action creator', () => {
    let getState;
    let dispatch;
    beforeEach(() => {
        getState = () => ({
            game: new Map({
                deck: new List([])
            })
        });
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getCurrentGame', () => 'game');
        __RewireAPI__.__Rewire__('getCardToAdd', () => new Map({ id: 12 }));
        __RewireAPI__.__Rewire__('selectCard', () => 12);
    });

    it('should be a function', () => {
        expect(getNextCardForHand('direction')).toBeA('function');
    });

    it('should dispatch the SELECT_CARD action', () => {
        getNextCardForHand()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(12);
    });
});