import expect from 'expect';
import { SERVER, ADD_CARD } from './../../../constants/actionTypes';
import { addCard } from './addCard';

describe('src/shared/actions/action-creators/addCard', () => {
    let expectedAction;
    it('should create an action to add a card to a owners hand', () => {
        expectedAction = {
            type: SERVER + ADD_CARD,
            payload: {
                id: 0,
                owner: 2
            }
        };
        expect(addCard(0, 2)).toEqual(expectedAction);
    });

    it('should create an action to add a card to a players hand if there is no owner', () => {
        expectedAction = {
            type: SERVER + ADD_CARD,
            payload: {
                id: 0,
                owner: null
            }
        };
        expect(addCard(0, null)).toEqual(expectedAction);
    });
});