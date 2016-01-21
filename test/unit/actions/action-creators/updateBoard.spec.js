import expect from 'expect';
import { UPDATE_BOARD } from './../../../../src/shared/constants/actionTypes';
import { updateBoard } from './../../../../src/shared/actions/action-creators/';

describe('UPDATE_BOARD', () => {

    it('should create an action to update the board when a card is placed', () => {
        const expectedAction = {
            type: UPDATE_BOARD,
            payload: {
                index: 0,
                owner: 0
            }
        };
        expect(updateBoard(0, 0)).toEqual(expectedAction)
    });

});