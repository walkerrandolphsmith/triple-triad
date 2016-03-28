import expect from 'expect';
import { Map } from 'immutable';
import { sendInvite, __RewireAPI__ } from './sendInvite';

describe('SEND INVITE async action creator', () => {
    let dispatch;
    let getState;
    let gameId;
    let email;
    let gameOwner;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        gameId = '1234';
        email = 'tester@gamil.com';
        gameOwner = 'gameOwner';

        dispatch = expect.createSpy();

        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: gameOwner
                })
            })
        });

        request = __RewireAPI__.__Rewire__('request', {
            post: function() {
                return this;
            },
            send: function() {
                return this;
            },
            set: function() {
                return this;
            },
            end: function() {
                return this;
            }
        });
        post = expect.spyOn(request, 'post').andCallThrough();
        send = expect.spyOn(request, 'send').andCallThrough();
        set = expect.spyOn(request, 'set').andCallThrough();

        __RewireAPI__.__Rewire__('sendInviteRequest', () => 1);
        __RewireAPI__.__Rewire__('sendInviteFailed', () => 2);
        __RewireAPI__.__Rewire__('sendInviteSuccess', () => 3);
    });

    it('should be a function', () => {
        expect(sendInvite()).toBeA('function');
    });

    it('should be a dispatch endPhase', () => {
        sendInvite()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(1);
    });

    describe('Given a request is made to get reset password', () => {
        let data;
        beforeEach(() => {
            data = {
                gameId: gameId,
                invitee: email,
                gameOwner: gameOwner
            };

            sendInvite(gameId, email)(dispatch, getState);
        });

        it('should request to /api/invite endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/invite');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify(data));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('Given a request is made and is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            sendInvite(gameId, email)(dispatch, getState);
        });

        it('should dispatch sendInviteRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch sendInviteSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Given a request is made and is unsuccessful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 500 });
            };
            sendInvite(gameId, email)(dispatch, getState);
        });

        it('should dispatch sendInviteRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch sendInviteFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});