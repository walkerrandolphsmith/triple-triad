import expect from 'expect';
import { Map, List } from 'immutable';
import { getNextSelectedCard, __RewireAPI__ } from './getNextSelectedCard';

describe('GET_NEXT_SELECTED_CARD async action creator', () => {
    let getState;
    let dispatch;
    beforeEach(() => {
        getState = () => ({
            game: new Map({
                deck: new List([])
            })
        });
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getCardToSelect', () => new Map({ id: 12 }));
        __RewireAPI__.__Rewire__('selectCard', () => 12);
    });

    it('should be a function', () => {
        expect(getNextSelectedCard('direction')).toBeA('function');
    });

    it('should dispatch the SELECT_CARD action', () => {
        getNextSelectedCard('direction')(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(12);
    });
});