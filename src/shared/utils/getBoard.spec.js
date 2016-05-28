import expect from 'expect';
import { List } from 'immutable';
import { getBoard } from './getBoard';
import { CardRecord } from './../ducks/game/records';

describe('src/shared/selectors/boardSelector', () => {
    let deck;
    let zero;
    let one;
    let two;
    let six;
    let cardInHandOne;
    let cardInHandTwo;
    describe('given a board has cards', () => {
        beforeEach(() => {
            zero = new CardRecord({ id: 0, name: 'Tifa', owner: 1, boardIndex: 0 });
            one = new CardRecord({ id: 1, name: 'Tifa', owner: 1, boardIndex: 1 });
            two = new CardRecord({ id: 2, name: 'Cloud', owner: 1, boardIndex: 2 });
            six = new CardRecord({ id: 3, name: 'Cid', owner: 1, boardIndex: 6 });
            cardInHandOne = new CardRecord({ id: 20, name: 'player', owner: 1, boardIndex: -1 });
            cardInHandTwo = new CardRecord({ id: 21, name: 'opponent', owner: 2, boardIndex: -1 });
            deck = new List([zero, one, two, six, cardInHandOne, cardInHandTwo]);
        });

        it('should contain an array with nulls where no cards exists and cards otherwise', () => {
            let expected = getBoard(deck).toJS();
            let actual = new List([zero, one, two, six]).toJS();
            expect(expected).toEqual(actual);
        });
    });
});