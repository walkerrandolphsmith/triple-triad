import expect from 'expect';
import { SERVER, PLACE_CARD } from './../../../constants/actionTypes';
import { placeCard } from './placeCard';

describe('PLACE_CARD', () => {

    it('should create an action to place a card on the board from a hand', () => {
        const index = 1;
        const expectedAction = {
            type: SERVER + PLACE_CARD,
            payload: {
                index: index
            }
        };
        expect(placeCard(index)).toEqual(expectedAction);
    });

});