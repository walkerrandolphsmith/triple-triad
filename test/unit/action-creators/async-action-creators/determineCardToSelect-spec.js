import expect from 'expect';
import {determineCardToSelect} from './../../../../src/shared/action-creators/';

describe('DETERMINE_CARD_TO_SELECT async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(determineCardToSelect()).toBeA('function');
    });
});