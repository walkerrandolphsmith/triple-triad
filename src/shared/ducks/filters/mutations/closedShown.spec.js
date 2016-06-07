import expect from 'expect';
import { Map } from 'immutable';
import { closedShown } from './closedShown';

describe('src/shared/reducers/filters/mutations/closedShown', () => {
    describe('Given filters state', () => {
        let state;
        let showClosed = false;
        beforeEach(() => {
            state = new Map({
                showClosed: showClosed
            });
        });

        describe('When changing show closed filter', () => {
            let actual;
            beforeEach(() => {
                actual = closedShown(state);
            });

            it('should negate the current value of show closed filter', () => {
                expect(actual.get('showClosed')).toEqual(!showClosed);
            });
        });
    });
});