import expect from 'expect';
import { SELECT_PIECE } from './../../../../src/shared/constants/action-types';
import { selectPiece } from './../../../../src/shared/actions/action-creators/';

describe('SELECT_PIECE', () => {

    it('should create an action to select a piece on the board', () => {
        const expectedAction = {
            type: SELECT_PIECE,
            payload: {
                index: 0
            }
        };
        expect(selectPiece(0)).toEqual(expectedAction)
    });

});