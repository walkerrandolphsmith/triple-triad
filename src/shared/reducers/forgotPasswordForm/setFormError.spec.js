import expect from 'expect';
import { Map } from 'immutable';
import setFormError from './setFormError';


describe('Given a state and a payload with field value of email', () => {
   let state, payload;
   beforeEach(() => {
      state = new Map({
          email: ''
      });
      payload = {
          field: 'email',
          error: 'message'
      }
   });

   describe('When setting a form error', () => {
       let actual;
       beforeEach(() => {
           actual = setFormError(state, payload);
       });

       it('should set the value of the state key, corresponding to the payload field, to the payload error value', () => {
          expect(actual.get(payload.field)).toEqual(payload.error);
       });
   });
});