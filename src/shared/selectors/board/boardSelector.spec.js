import expect from 'expect';
import { Map, List } from 'immutable';
import { getBoard } from './boardSelector';

describe("Board selector", () => {

    describe("given a board has cards", () => {

        let deck, zero, one, two, six, cardInHandOne, cardInHandTwo;
        beforeEach(() => {
            zero = new Map({id: 0, name: 'Tifa', owner: 1, boardIndex: 0});
            one = new Map({id: 1, name: 'Tifa', owner: 1, boardIndex: 1});
            two = new Map({id: 2, name: 'Cloud', owner: 1, boardIndex: 2});
            six = new Map({id: 3, name: 'Cid', owner: 1, boardIndex: 6});
            cardInHandOne = new Map({id: 20, name: 'player', owner: 1, boardIndex: -1});
            cardInHandTwo = new Map({id: 21, name: 'opponent', owner: 2, boardIndex: -1});

            deck = new List([zero, one, two, six, cardInHandOne, cardInHandTwo]);
        });

        it('should contain an array with nulls where no cards exists and cards otherwise', () => {
            let expected = getBoard(deck).toJS();
            let actual = new List([zero, one, two, six]).toJS();

            expect(expected).toEqual(actual)
        });
    });
});