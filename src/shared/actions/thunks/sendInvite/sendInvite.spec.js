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

    describe('Given a request is made to get reset password', () => {
        let post, send, set;
        let email;
        beforeEach(() => {
            let request = SendInvite.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });

            post = expect.spyOn(request, 'post').andCallThrough();
            send = expect.spyOn(request, 'send').andCallThrough();
            set = expect.spyOn(request, 'set').andCallThrough();

            email = 'tester@gmail.com';
            sendInvite(email)(dispatch);
        });

        it('should request to /api/invite endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/invite');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ email: email }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

});