import expect from 'expect';
import { SERVER, PLACE_CARD } from './../../../constants/actionTypes';
import { placeCard } from './placeCard';

describe('src/shared/actions/action-creators/placeCard', () => {
    describe('Given PLACE_CARD action type', () => {
        let index;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            expectedAction = {
                type: SERVER + PLACE_CARD,
                payload: {
                    index: index
                }
            };
        });

        describe('When invoking the placeCard action creator', () => {
            it('should create an action', () => {
                expect(placeCard(index)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload index field', () => {
                expect(placeCard(index).payload.index).toEqual(index);
            });
        });
    });
});