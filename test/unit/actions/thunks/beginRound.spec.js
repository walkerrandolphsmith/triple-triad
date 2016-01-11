import expect from 'expect';
import BeginRound from './../../../../src/shared/actions/thunks/beginRound';
import { beginRound, __RewireAPI__ as beginRoundRewireAPI } from './../../../../src/shared/actions/thunks/beginRound';

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
        BeginRound.__Rewire__('getNextSelectedCard', function(){
            return 1;
        });
        beginRound()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(1)
    });
});