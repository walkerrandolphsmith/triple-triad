import expect from 'expect';
import { Map } from 'immutable';
import { filteredWinnerType } from './filteredWinnerType';

describe('src/shared/reducers/filters/mutations/filterWinnerType', () => {
    describe('Given filters state', () => {
        let state;
        let payload;
        let winnerType = 'winner';
        beforeEach(() => {
            state = new Map({
                winnerType: 'all'
            });
            payload = {
                winnerType: winnerType
            }
        });

        describe('When changing winner type filter', () => {
            let actual;
            beforeEach(() => {
                actual = filteredWinnerType(state, payload);
            });

            it('should set the winner type filter', () => {
                expect(actual.get('winnerType')).toEqual(winnerType);
            });
        });
    });
});