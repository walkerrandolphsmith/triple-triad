import expect from 'expect';
import { handleLeft } from './handleLeft';

describe('HANDLE_LEFT async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleLeft()).toBeA('function');
    });

});