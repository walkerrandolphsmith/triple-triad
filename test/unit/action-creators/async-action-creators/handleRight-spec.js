import expect from 'expect';
import { handleRight } from './../../../../src/shared/action-creators/';

describe('HANDLE_RIGHT async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleRight()).toBeA('function');
    });

});