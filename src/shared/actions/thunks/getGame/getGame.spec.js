import expect from 'expect';
import { Map } from 'immutable';
import { getGame, __RewireAPI__ } from './getGame';

describe('Get Games async action creator', () => {
    let dispatch;
    let getState;
    let gameId;
    let post;
    let send;
    let set;
    let request;
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

        __RewireAPI__.__Rewire__('getGameRequest', () => 1);
        __RewireAPI__.__Rewire__('getGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('getGameFailed', () => 3);

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
        expect(getGame(gameId)).toBeA('function');
    });

    describe('Given a request is made', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200 });
            getGame(gameId)(dispatch, getState);
        });

        it('should request to /api/getGame endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/getGame');
        });

        it('should send the game id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ gameId: gameId }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When /getGame is successful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200 });
            getGame(gameId)(dispatch, getState);
        });

        it('should dispatch getGameSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When /getGame is unsuccessful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 500 });
            getGame(gameId)(dispatch, getState);
        });

        it('should dispatch getGameFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});