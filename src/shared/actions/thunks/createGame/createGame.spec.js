import expect from 'expect';
import { Map } from 'immutable';
import { createGame, __RewireAPI__ } from './createGame';

describe('Create Game async action creator', () => {
    let dispatch;
    let getState;
    let deck;
    let phase;
    let ownerId;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        deck = [1, 2, 3];
        phase = 'S';
        __RewireAPI__.__Rewire__('deck', deck);
        __RewireAPI__.__Rewire__('PHASES', { SETTINGS_SELECTION: phase });
        ownerId = 20;
        dispatch = expect.createSpy();
        getState = () => ({
            auth: new Map({
                user: new Map({
                    id: ownerId
                })
            })
        });

        __RewireAPI__.__Rewire__('createGameRequest', () => 1);
        __RewireAPI__.__Rewire__('createGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('createGameFailed', () => 3);

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
        expect(createGame()).toBeA('function');
    });

    describe('Given a request is made to create a game', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200, body: { _id: 1 } });
            createGame()(dispatch, getState);
        });

        it('should request to /api/createGame endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/createGame');
        });

        it('should send the user id and deck with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({
                userId: ownerId,
                deck: deck,
                phase: phase
            }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('Given game creation is successful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200, body: { _id: 1 } });
        });

        it('should dispatch createGameSuccess', () => {
            createGame()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given game creation is unsuccessful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 500 });
        });

        it('should dispatch createGameFailed', () => {
            createGame()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});