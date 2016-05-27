import expect from 'expect';
import { Map } from 'immutable';
import { handleLeft, __RewireAPI__ } from './handleLeft';
import PHASE from './../../../constants/phases';
import { GameRecord } from './../../../constants/records';

describe('src/shared/reducers/game/thunks/handleLeft', () => {
    describe('Given getState, dispatch', () => {
        let getState;
        let dispatch;
        let game;
        beforeEach(() => {
            getState = () => ({});
            dispatch = expect.createSpy();
            game = new GameRecord({});
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            __RewireAPI__.__Rewire__('selectNextCard', () => 1);
            __RewireAPI__.__Rewire__('selectNextPiece', () => 2);
        });
    
        it('should be a function', () => {
            expect(handleLeft()).toBeA('function');
        });
    
        describe('When the getState returns state containing a game with phase handSelection', () => {
            beforeEach(() => {
                game = new GameRecord({
                    phase: PHASE.HAND_SELECTION
                });
                __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            });
    
            it('should dispatch the result of selectNextCard', () => {
                handleLeft()(dispatch, getState);
                expect(dispatch).toHaveBeenCalled(1);
            });
        });
    
        describe('When the getState returns state containing a game with phase pieceSelection', () => {
            beforeEach(() => {
                game = new GameRecord({
                    phase: PHASE.PIECE_SELECTION
                });
                __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            });
    
            it('should dispatch the result of selectNextPiece', () => {
                handleLeft()(dispatch, getState);
                expect(dispatch).toHaveBeenCalled(2);
            });
        });
    });
});