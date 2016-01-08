import expect from 'expect';
import { handleEscape } from './../../../../src/shared/action-creators/';

describe('HANDLE_ESCAPE async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleEscape()).toBeA('function');
    });

});