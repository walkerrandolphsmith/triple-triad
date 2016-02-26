import expect from 'expect';
import SendInvite from './sendInvite';
import { sendInvite, __RewireAPI__ as sendInviteRewireAPI } from './sendInvite';

describe('SEND INVITE async action creator', () => {

    let dispatch, getState;
    beforeEach(() => {
        dispatch = expect.createSpy();

        getState = () => ({ });

        SendInvite.__Rewire__('endPhase', () => {
            return 1;
        });
    });

    it('should be a function', () => {
        expect(sendInvite()).toBeA('function')
    });

    it('should be a dispatch endPhase', () => {
        sendInvite()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(1)
    });

});