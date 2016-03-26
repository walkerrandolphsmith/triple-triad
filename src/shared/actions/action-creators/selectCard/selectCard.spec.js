import expect from 'expect';
import { SERVER, SELECT_CARD } from './../../../constants/actionTypes';
import { selectCard } from './selectCard';

describe('SELECT_CARD', () => {

    it('should create an action to select a card', () => {
        const expectedAction = {
            type: SERVER + SELECT_CARD,
            payload: {
                id: 0
            }
        };
        expect(selectCard(0)).toEqual(expectedAction)
    });

});