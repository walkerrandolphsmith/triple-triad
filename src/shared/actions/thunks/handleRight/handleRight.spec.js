import expect from 'expect';
import { Map } from 'immutable';
import { handleRight, __RewireAPI__ } from './handleRight';

describe('HANDLE_RIGHT', () => {
    describe('Given getState, dispatch', () => {
        let getState;
        let dispatch;
        let game;
        beforeEach(() => {
            getState = () => ({});
            dispatch = expect.createSpy();
            game = new Map({
                phase: 'handSelection'
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            __RewireAPI__.__Rewire__('getNextCardForHand', () => 1);
            __RewireAPI__.__Rewire__('getNextSelectedPiece', () => 2);
        });

        it('should be a function', () => {
            expect(handleRight()).toBeA('function');
        });

        describe('When the getState returns state containing a game with phase handSelection', () => {
            beforeEach(() => {
                game = new Map({
                    phase: 'handSelection'
                });
                __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            });

            it('should dispatch the result of getNextCardForHand', () => {
                handleRight()(dispatch, getState);
                expect(dispatch).toHaveBeenCalled(1);
            });
        });

        describe('When the getState returns state containing a game with phase pieceSelection', () => {
            beforeEach(() => {
                game = new Map({
                    phase: 'pieceSelection'
                });
                __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            });

            it('should dispatch the result of getNextSelectedPiece', () => {
                handleRight()(dispatch, getState);
                expect(dispatch).toHaveBeenCalled(2);
            });
        });
    });
});