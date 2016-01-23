import expect from 'expect';
import { Map } from 'immutable';
import UpdateRoute from './../../../../src/shared/actions/thunks/updateRoute';
import { updateRoute, __RewireAPI__ as updateRouteRewireAPI } from './../../../../src/shared/actions/thunks/updateRoute';

describe('UPDATE_ROUTE async action creator', () => {

    it('should be a function', () => {
        expect(updateRoute()).toBeA('function');
    });

    describe('given the indexRoute of /settings-selection and random hand is not enabled', () => {
        let getState, dispatch;
        beforeEach(() => {
            getState = () => ({
                settings: new Map({
                    randomHand: false
                }),
                routing: {
                    path: '/settings-selection'
                }
            });
            dispatch = expect.createSpy();
        });

        it('should dispatch setPhase action', () => {
            UpdateRoute.__Rewire__('setPhase', function(newPhase){
                return 'handSelection';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('handSelection')
        });

        it('should dispatch getNextCardForHand action', () => {
            UpdateRoute.__Rewire__('getNextCardForHand', function(){
                return 'id';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('id')
        });

        it('should dispatch pushPath action', () => {
            UpdateRoute.__Rewire__('pushPath', function(){
                return 0;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(0)
        });
    });

    describe('given the route is /settings-selection and random hand is enabled ', () => {
        let getState, dispatch;
        beforeEach(() => {
            getState = () => ({
                settings: new Map({
                    randomHand: true
                }),
                routing: {
                    path: '/settings-selection'
                }
            });
            dispatch = expect.createSpy();
        });

        it('should dispatch setPhase action', () => {
            UpdateRoute.__Rewire__('setPhase', function(){
                return 'cardSelection';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('cardSelection')
        });

        it('should dispatch setHands action', () => {
            UpdateRoute.__Rewire__('setHands', function(){
                return 1;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch getNextSelectedCard action', () => {
            UpdateRoute.__Rewire__('getNextSelectedCard', function(){
                return 2;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch pushPath action', () => {
            UpdateRoute.__Rewire__('pushPath', function(){
                return '/round';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('/round')
        });
    });

    describe('given the route is /card-selection', () => {
        let getState, dispatch;
        beforeEach(() => {
            getState = () => ({
                settings: new Map({
                    randomHand: false
                }),
                routing: {
                    path: '/card-selection'
                }
            });
            dispatch = expect.createSpy();
        });

        it('should dispatch setHands action', () => {
            UpdateRoute.__Rewire__('setHands', function(){
                return 1;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch getNextSelectedCard action', () => {
            UpdateRoute.__Rewire__('getNextSelectedCard', function(){
                return 2;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });

        it('should dispatch pushPath action', () => {
            UpdateRoute.__Rewire__('pushPath', function(){
                return '/round';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('/round')
        });
    });

    describe('given the game is over and you play again', () => {
        let getState, dispatch;
        beforeEach(() => {
            getState = () => ({
                settings: new Map({
                    randomHand: false
                }),
                routing: {
                    path: '/round'
                }
            });
            dispatch = expect.createSpy();
        });

        it('should dispatch newGame action', () => {
            UpdateRoute.__Rewire__('resetGame', function(){
                return 5;
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5)
        });

        it('should dispatch pushPath action', () => {
            UpdateRoute.__Rewire__('pushPath', function(){
                return '/settings-selection';
            });
            updateRoute()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('/settings-selection')
        });
    });

});