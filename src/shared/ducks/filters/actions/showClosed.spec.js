import expect from 'expect';
import { SHOW_CLOSED, showClosed } from './../index';

describe('src/shared/reducers/filters/actions/showClosed', () => {
   describe('Given SHOW_CLOSED action type', () => {
      describe('When invoking the showClosed action creator', () => {
         it('should create an action', () => {
            const expectedAction = {
               type: SHOW_CLOSED
            };
            expect(showClosed()).toEqual(expectedAction);
         });
      });
   });
});