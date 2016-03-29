import expect from 'expect';
import { Map } from 'immutable';
import { getGames, __RewireAPI__ } from './getGames';

describe('Get Games async action creator', () => {
    let dispatch;
    let getState;
    let ownerId;
    let post;
    let send;
    let set;
    let request;
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

        __RewireAPI__.__Rewire__('getGamesRequest', () => 1);
        __RewireAPI__.__Rewire__('getGamesSuccess', () => 2);
        __RewireAPI__.__Rewire__('getGamesFailed', () => 3);

        request = __RewireAPI__.__Rewire__('request', {
            post: function() { return this; },
            send: function() { return this; },
            set: function() { return this; }
        });

        post = expect.spyOn(request, 'post').andCallThrough();
        send = expect.spyOn(request, 'send').andCallThrough();
        set = expect.spyOn(request, 'set').andCallThrough();
    });

    it('should be a function', () => {
        expect(getGames()).toBeA('function');
    });

    describe('Given a request is made', () => {
        beforeEach(() => {
            request.end = (fn) => {
                fn(null, { status: 200 });
            };
            getGames()(dispatch, getState);
        });

        it('should request to /api/getGames endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/getGames');
        });

        it('should send the user with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ userId: ownerId }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When /getGames is successful', () => {
        beforeEach(() => {
            request.end = (fn) => {
                fn(null, { status: 200 });
            };
            getGames()(dispatch, getState);
        });

        it('should dispatch getGamesSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When /getGames is unsuccessful', () => {
        beforeEach(() => {
            request.end = (fn) => {
                fn(null, { status: 500 });
            };
            getGames()(dispatch, getState);
        });

        it('should dispatch getGamesFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});