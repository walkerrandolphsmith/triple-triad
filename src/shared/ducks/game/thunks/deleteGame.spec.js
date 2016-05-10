import expect from 'expect';
import { deleteGame, __RewireAPI__ } from './deleteGame';

describe('src/shared/reducers/game/thunks/deleteGame', () => {
    let dispatch;
    let id;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        id = 20;
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('deleteGameRequest', () => 1);
        __RewireAPI__.__Rewire__('deleteGameSuccess', () => 2);
        __RewireAPI__.__Rewire__('deleteGameFailure', () => 3);

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
        expect(deleteGame()).toBeA('function');
    });

    describe('Given a request is made to delete a game', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200 });
            deleteGame(id)(dispatch);
        });

        it('should request to /api/deleteGame endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/deleteGame');
        });

        it('should send the game id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ gameId: id }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('Given game deletion is successful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 200 });
        });

        it('should dispatch deleteGameSuccess', () => {
            deleteGame(id)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given game deletion is unsuccessful', () => {
        beforeEach(() => {
            request.end = (fn) => fn(null, { status: 500 });
        });

        it('should dispatch createGameFailed', () => {
            deleteGame(id)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});