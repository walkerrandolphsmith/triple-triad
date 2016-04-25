import expect from 'expect';
import { SERVER, SELECT_CARD } from './../../../constants/actionTypes';
import { selectCard } from './selectCard';

describe('src/shared/actions/action-creators/selectCard', () => {
    describe('Given SELECT_CARD action type', () => {
        let id;
        let expectedAction;
        beforeEach(() => {
            id = 20;
            expectedAction = {
                type: SERVER + SELECT_CARD,
                payload: {
                    id: id
                }
            };
        });

        describe('When invoking the selectCard action creator', () => {
            it('should create an action', () => {
                expect(selectCard(id)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload id field', () => {
                expect(selectCard(id).payload.id).toEqual(id);
            });
        });
    });
});