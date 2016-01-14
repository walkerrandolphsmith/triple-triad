import expect from 'expect';
import { PLACE_CARD } from './../../../../src/shared/constants/action-types';
import { placeCard } from './../../../../src/shared/actions/action-creators/';

describe('PLACE_CARD', () => {

    it('should create an action to place a card on the board from a hand', () => {
        const index = 1;
        const expectedAction = {
            type: PLACE_CARD,
            payload: {
                index: index
            }
        };
        expect(placeCard(index)).toEqual(expectedAction);
    });

});