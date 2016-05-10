import expect from 'expect';
import { UPDATE_BOARD, updateBoard } from './../index';

describe('src/shared/reducers/game/actions/updateBoard', () => {
    describe('Given UPDATE_BOARD action type', () => {
        let index;
        let owner;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            owner = 1;
            expectedAction = {
                type: UPDATE_BOARD,
                payload: {
                    index: index,
                    owner: owner
                }
            };
        });

        describe('When invoking the updateBoard action creator', () => {
            it('should create an action', () => {
                expect(updateBoard(index, owner)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload index field', () => {
                expect(updateBoard(index, owner).payload.index).toEqual(index);
            });

            it('should set its second parameter to the payload owner field', () => {
                expect(updateBoard(index, owner).payload.owner).toEqual(owner);
            });
        });
    });
});