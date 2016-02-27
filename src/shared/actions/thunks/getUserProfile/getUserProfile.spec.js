import expect from 'expect';
import GetUserProfile from './getUserProfile';
import { getUserProfile, __RewireAPI__ as getUserProfileRewireAPI } from './getUserProfile';

describe('Get User Profile async action creator', () => {

    let dispatch, id;
    let post, send, set;
    beforeEach(() => {
       dispatch = expect.createSpy();
       id = 100;

       GetUserProfile.__Rewire__('requestUserProfile', () => 1);
       GetUserProfile.__Rewire__('receiveUserProfile', (user) => 2);
    });

    it('should be a function', () => {
       expect(getUserProfile()).toBeA('function')
    });

    describe('Given a request is made to get user profile', () => {

        beforeEach(() => {
            let request = GetUserProfile.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 200,
                        body: {
                            verified: true
                        }
                    });
                }
            });

            post = expect.spyOn(request, 'post').andCallThrough();
            send = expect.spyOn(request, 'send').andCallThrough();
            set = expect.spyOn(request, 'set').andCallThrough();

            getUserProfile(id)(dispatch);
        });

        it('should request to /api/user_profile endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/user_profile');
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
            GetUserProfile.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 200,
                        body: {
                            verified: true
                        }
                    });
                }
            });
            getUserProfile(id)(dispatch);
        });

        it('should dispatch requestUserProfile action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should call receiveUserProfile given user info from response body', () => {
            //expect(receiveUserProfileSpy).toHaveBeenCalledWith({ verified: true })
        });

        it('should dispatch receiveUserProfile action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });

    });
});