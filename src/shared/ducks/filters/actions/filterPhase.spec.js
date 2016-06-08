import expect from 'expect';
import { FILTER_PHASE, filterPhase } from './../index';

describe('src/shared/reducers/filters/actions/filterPhase', () => {
   describe('Given FILTER_PHASE action type', () => {
      describe('When invoking the filterPhase action creator', () => {
         it('should create an action', () => {
            const expectedAction = {
               type: FILTER_PHASE,
               payload: {
                  phase: 'settings'
               }
            };
            expect(filterPhase('settings')).toEqual(expectedAction);
         });
      });
   });
});