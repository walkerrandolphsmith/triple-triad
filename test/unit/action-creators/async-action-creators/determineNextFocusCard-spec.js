import expect from 'expect';
import {determineNextFocusCard} from './../../../../src/shared/action-creators/';

describe('DETERMINE_NEXT_FOCUS_CARD async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(determineNextFocusCard()).toBeA('function');
    });
});