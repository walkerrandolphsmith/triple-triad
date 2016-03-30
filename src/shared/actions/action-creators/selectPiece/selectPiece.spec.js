import expect from 'expect';
import { SERVER, SELECT_PIECE } from './../../../constants/actionTypes';
import { selectPiece } from './selectPiece';

describe('SELECT_PIECE', () => {
    it('should create an action to select a piece on the board', () => {
        const expectedAction = {
            type: SERVER + SELECT_PIECE,
            payload: {
                index: 0
            }
        };
        expect(selectPiece(0)).toEqual(expectedAction);
    });
});