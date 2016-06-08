import expect from 'expect';
import { FILTER_WINNER_TYPE, filterWinnerType } from './../index';

describe('src/shared/reducers/filters/actions/filterWinnerType', () => {
   describe('Given FILTER_WINNER_TYPE action type', () => {
      describe('When invoking the filterWinnerType action creator', () => {
         it('should create an action', () => {
            const expectedAction = {
               type: FILTER_WINNER_TYPE,
               payload: {
                  winnerType: 'winner'
               }
            };
            expect(filterWinnerType('winner')).toEqual(expectedAction);
         });
      });
   });
});