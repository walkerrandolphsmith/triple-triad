import expect from 'expect';
import { UPDATE_BOARD, updateBoard } from './../index';

describe('src/shared/reducers/game/actions/updateBoard', () => {
    describe('Given UPDATE_BOARD action type', () => {
        let index;
        let owner;
        let flipDirection;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            owner = 1;
            flipDirection = 2;
            expectedAction = {
                type: UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: owner,
                    flipDirection: flipDirection
                }
            };
        });

        describe('When invoking the updateBoard action creator', () => {
            let actual;
            beforeEach(() => {
                actual = updateBoard(index, owner, flipDirection);
            });

            it('should create an action', () => {
                expect(actual).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload index field', () => {
                expect(actual.payload.index).toEqual(index);
            });

            it('should set its second parameter to the payload owner field', () => {
                expect(actual.payload.owner).toEqual(owner);
            });

            it('should set its third parameter to the payload flipDirection field', () => {
                expect(actual.payload.flipDirection).toEqual(flipDirection);
            });
        });
    });
});