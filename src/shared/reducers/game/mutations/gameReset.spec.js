import expect from 'expect';
import { Map } from 'immutable';
import { gameReset } from './../index';

describe('src/shared/reducers/game/mutations/gameReset', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                prop: 'value'
            });
        });

        describe('When resetting a game', () => {
            let actual;
            beforeEach(() => {
                state.set('prop', 'newValue');
                actual = gameReset(state);
            });

            it('should return the initial state', () => {
                expect(actual.toJS()).toEqual(state.toJS());
            });
        });
    });
});