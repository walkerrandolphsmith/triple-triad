import expect from 'expect';
import { Map } from 'immutable';
import GetGame from './getGame';
import { getGame, __RewireAPI__ } from './getGame';

describe('Get Games async action creator', () => {

    let dispatch, getState, gameId;
    let post, send, set;
    beforeEach(() => {
        gameId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
          auth: new Map({
              user: new Map({
                  id: gameId
              })
          })
        });

        GetGame.__Rewire__('getGameRequest', () => 1);
        GetGame.__Rewire__('getGameSuccess', () => 2);
        GetGame.__Rewire__('getGameFailed', () => 3);
    });

    it('should be a function', () => {
       expect(getGame(gameId)).toBeA('function')
    });

    describe('Given a request is made', () => {

        beforeEach(() => {
            let request = GetGame.__Rewire__('request', {
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

            getGame(gameId)(dispatch, getState);
        });

        it('should request to /api/getGame endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/getGame');
        });

        it('should send the game id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({gameId: gameId}));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When /getGame is successful', () => {
        beforeEach(() => {
            GetGame.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
            getGame(gameId)(dispatch, getState);
        });

        it('should dispatch getGameSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When /getGame is unsuccessful', () => {
        beforeEach(() => {
            GetGame.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
            getGame(gameId)(dispatch, getState);
        });

        it('should dispatch getGameFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});