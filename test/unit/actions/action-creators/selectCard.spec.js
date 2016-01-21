import expect from 'expect';
import { SELECT_CARD } from './../../../../src/shared/constants/actionTypes';
import { selectCard } from './../../../../src/shared/actions/action-creators/';

describe('SELECT_CARD', () => {

    it('should create an action to select a card', () => {
        const expectedAction = {
            type: SELECT_CARD,
            payload: {
                id: 0
            }
        };
        expect(selectCard(0)).toEqual(expectedAction)
    });

});