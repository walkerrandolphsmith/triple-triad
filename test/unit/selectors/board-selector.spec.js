import expect from 'expect';
import { getBoard } from './../../../src/shared/selectors/boardSelector';

describe("Board selector", () => {

    describe("given a board has cards", () => {

        let deck, zero, one, two, six, cardInHandOne, cardInHandTwo;
        beforeEach(() => {
            zero = {id: 0, name: 'Tifa', owner: 1, boardIndex: 0};
            one = {id: 1, name: 'Tifa', owner: 1, boardIndex: 1};
            two = {id: 2, name: 'Cloud', owner: 1, boardIndex: 2};
            six = {id: 3, name: 'Cid', owner: 1, boardIndex: 6};
            cardInHandOne = {id: 20, name: 'player', owner: 1, boardIndex: -1};
            cardInHandTwo = {id: 21, name: 'opponent', owner: 2, boardIndex: -1};

            deck = [zero, one, two, six, cardInHandOne, cardInHandTwo];
        });

        it('should contain an array with nulls where no cards exists and cards otherwise', () => {
            expect(getBoard(deck)).toEqual([zero, one, two, six]);
        });
    });
});