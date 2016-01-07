import expect from 'expect';
import { getBoard } from './../../../src/shared/selectors/boardSelector';

describe("Board selector", () => {

    describe("given a board has cards", () => {

        let deck, zero, one, two, six;
        beforeEach(() => {

                zero = {id: 0, name: 'Tifa', owner: 0, boardIndex: 0};
                one = {id: 1, name: 'Tifa', owner: 0, boardIndex: 1};
                two = {id: 2, name: 'Cloud', owner: 0, boardIndex: 2};
                six = {id: 3, name: 'Cid', owner: 0, boardIndex: 6};

            deck = [zero, one, two, six];
        });

        it('should contain an array with nine elements', () => {
            expect(getBoard(deck).length).toEqual(9);
        });

        it('should contain an array with nulls where no cards exists and cards otherwise', () => {
            expect(getBoard(deck)).toEqual([zero, one, two, null, null, null, six, null, null]);
        });
    });
});