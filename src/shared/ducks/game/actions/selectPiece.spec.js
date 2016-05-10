import expect from 'expect';
import { SELECT_PIECE, selectPiece } from './../index';

describe('src/shared/reducers/game/actions/selectPiece', () => {
    describe('Given SELECT_PIECE action type', () => {
        let index;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            expectedAction = {
                type: SELECT_PIECE,
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