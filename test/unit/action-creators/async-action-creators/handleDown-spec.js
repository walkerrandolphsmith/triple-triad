import expect from 'expect';
import { handleDown } from './../../../../src/shared/action-creators/';

describe('HANDLE_UP async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleDown()).toBeA('function');
    });

});