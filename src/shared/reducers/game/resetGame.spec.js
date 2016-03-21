import expect from 'expect';
import { Map, List } from 'immutable';

import resetGame from './resetGame';

describe('Given game state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            prop:'value'
        });
    });

    describe('When resetting a game', () => {
        let actual;
        beforeEach(() => {
            let nextState = state.set('prop', 'newValue');
            actual = resetGame(nextState)
        });

        it('should return the initial state', () => {
            expect(actual.toJS()).toEqual(state.toJS());
        });
    });
});