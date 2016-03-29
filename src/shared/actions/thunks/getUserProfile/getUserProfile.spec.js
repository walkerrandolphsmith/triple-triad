import expect from 'expect';
import { getUserProfile, __RewireAPI__ } from './getUserProfile';

describe('Get User Profile async action creator', () => {
    let dispatch;
    let id;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        id = 100;
        __RewireAPI__.__Rewire__('requestUserProfile', () => 1);
        __RewireAPI__.__Rewire__('receiveUserProfile', () => 2);
        request = __RewireAPI__.__Rewire__('request', {
            post: function() {
                return this;
            },
            send: function() {
                return this;
            },
            set: function() {
                return this;
            }
        });
        post = expect.spyOn(request, 'post').andCallThrough();
        send = expect.spyOn(request, 'send').andCallThrough();
        set = expect.spyOn(request, 'set').andCallThrough();
    });

    it('should be a function', () => {
        expect(getUserProfile()).toBeA('function');
    });

    describe('Given a request is made to get user profile', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, {
                    status: 200,
                    body: {
                        verified: true
                    }
                });
            };
            getUserProfile(id)(dispatch);
        });

        it('should request to /api/userProfile endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/userProfile');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ userId: id }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('WHen retrieving user profile is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, {
                    status: 200,
                    body: {
                        verified: true
                    }
                });
            };
            getUserProfile(id)(dispatch);
        });

        it('should dispatch requestUserProfile action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should call receiveUserProfile given user info from response body', () => {
            // expect(receiveUserProfileSpy).toHaveBeenCalledWith({ verified: true })
        });

        it('should dispatch receiveUserProfile action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});