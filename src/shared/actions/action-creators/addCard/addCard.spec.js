import expect from 'expect';
import { SERVER, ADD_CARD } from './../../../constants/actionTypes';
import { addCard } from './addCard';

describe('ADD_CARD', () => {

    it('should create an action to add a card to a owners hand', () => {
        const expectedAction = {
            type: SERVER + ADD_CARD,
            payload: {
                id: 0,
                owner: 2
            }
        };
        expect(addCard(0, 2)).toEqual(expectedAction)
    });


    it('should create an action to add a card to a players hand if there is no owner', () => {
        const expectedAction = {
            type: SERVER + ADD_CARD,
            payload: {
                id: 0,
                owner: undefined
            }
        };
        expect(addCard(0)).toEqual(expectedAction)
    });

});