import expect from 'expect';
import { SET_FORM_ERROR } from './../';
import { setFormError } from './../';

describe('src/shared/actions/action-creators/setFormError', () => {
    describe('Given SET_FORM_ERROR action type and payload', () => {
        let payload;
        beforeEach(() => {
            payload = {
                form: 'formA',
                field: 'fieldA',
                error: 'errorMessage'
            }
        });
        describe('When invoking the setFormError action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SET_FORM_ERROR,
                    payload: payload
                };
                expect(setFormError(payload)).toEqual(expectedAction);
            });
        });
    });
});