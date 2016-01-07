import expect from 'expect';
import { beginRound } from './../../../../src/shared/action-creators/';

describe('BEGIN_ROUND async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(beginRound()).toBeA('function');
    });

});