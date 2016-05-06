import expect from 'expect';
import { PLACE_CARD, placeCard } from './../index';
import SERVER from './../../../constants/socketActionPrefix';

describe('src/shared/reducers/game/actions/placeCard', () => {
    describe('Given PLACE_CARD action type', () => {
        let index;
        let expectedAction;
        beforeEach(() => {
            index = 20;
            expectedAction = {
                type: SERVER + PLACE_CARD
            };
        });

        describe('When invoking the placeCard action creator', () => {
            it('should create an action', () => {
                expect(placeCard(index)).toEqual(expectedAction);
            });
        });
    });
});