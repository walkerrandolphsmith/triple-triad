import expect from 'expect';
import { List, Map } from 'immutable';
import CreateGame from './createGame';
import { createGame, __RewireAPI__ as createGameRewireAPI } from './createGame';

describe('Create Game async action creator', () => {

    let dispatch, getState;
    let deck, ownerId;
    beforeEach(() => {
        deck = [1,2,3];
        ownerId = 20;

        dispatch = expect.createSpy();

        getState = () => ({
            game: new Map({
                deck: new List(deck)
            }),
            auth: new Map({
                user: new Map({
                    id: ownerId
                })
            })
        });

        CreateGame.__Rewire__('createGameRequest', () =>  1);
        CreateGame.__Rewire__('createGameSuccess', () => 2);
        CreateGame.__Rewire__('createGameFailed', () => 3);
    });

    it('should be a function', () => {
       expect(createGame()).toBeA('function')
    });

    describe('Given a request is made to create a game', () => {

        let post, send, set;
        beforeEach(() => {
            let request = CreateGame.__Rewire__('request', {
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

            createGame()(dispatch, getState);
        });

        it('should request to /api/createGame endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/createGame');
        });

        it('should send the user id and deck with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({
                userId: ownerId,
                deck: deck
            }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('Given game creation is successful', () => {

        let post, send, set;
        beforeEach(() => {
            let request = CreateGame.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
        });

        it('should dispatch createGameSuccess', () => {
            createGame()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given game creation is unsuccessful', () => {

        let post, send, set;
        beforeEach(() => {
            let request = CreateGame.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
        });

        it('should dispatch createGameFailed', () => {
            createGame()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});