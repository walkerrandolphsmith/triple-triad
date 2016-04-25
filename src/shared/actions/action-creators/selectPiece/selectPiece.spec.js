import expect from 'expect';
import { SERVER, SELECT_PIECE } from './../../../constants/actionTypes';
import { selectPiece } from './selectPiece';

describe('src/shared/actions/action-creators/selectPiece', () => {
    describe('Given SELECT_PIECE action type', () => {
        let index;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            expectedAction = {
                type: SERVER + SELECT_PIECE,
                payload: {
                    index: index
                }
            };
        });

        describe('When invoking the selectPiece action creator', () => {
            it('should create an action', () => {
                expect(selectPiece(index)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload index field', () => {
                expect(selectPiece(index).payload.index).toEqual(index);
            });
        });
    });
});