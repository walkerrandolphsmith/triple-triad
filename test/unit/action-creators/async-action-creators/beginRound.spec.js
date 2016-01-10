import expect from 'expect';
import { beginRound, getNextSelectedCard } from './../../../../src/shared/action-creators/';

describe('BEGIN_ROUND async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(beginRound()).toBeA('function');
    });

    it('should dispatch getNextSelectedCard action', () => {
        beginRound()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(getNextSelectedCard())
    });

    it('should dispatch NEXT_STEP action', () => {
        beginRound()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({type: 'NextStep' })
    });
});