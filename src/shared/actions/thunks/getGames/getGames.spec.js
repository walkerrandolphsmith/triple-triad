import expect from 'expect';
import { Map } from 'immutable';
import GetGames from './getGames';
import { getGames, __RewireAPI__ as getGamesRewireAPI } from './getGames';

describe('Get Games async action creator', () => {

    let dispatch, getState, ownerId;
    let post, send, set;
    beforeEach(() => {
        ownerId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
          auth: new Map({
              user: new Map({
                  id: ownerId
              })
          })
        });

        GetGames.__Rewire__('getGamesRequest', () => 1);
        GetGames.__Rewire__('getGamesSuccess', () => 2);
        GetGames.__Rewire__('getGamesFailed', () => 3);
    });

    it('should be a function', () => {
       expect(getGames()).toBeA('function')
    });

    describe('Given a request is made', () => {

        beforeEach(() => {
            let request = GetGames.__Rewire__('request', {
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

            getGames()(dispatch, getState);
        });

        it('should request to /api/get_games endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/get_games');
        });

        it('should send the user with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({userId: ownerId}));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When /get_games is successful', () => {
        beforeEach(() => {
            GetGames.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
            getGames()(dispatch, getState);
        });

        it('should dispatch getGamesSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When /get_games is unsuccessful', () => {
        beforeEach(() => {
            GetGames.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
            getGames()(dispatch, getState);
        });

        it('should dispatch getGamesFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});