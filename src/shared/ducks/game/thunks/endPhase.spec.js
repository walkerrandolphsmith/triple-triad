import expect from 'expect';
import { Map } from 'immutable';
import { endPhase, __RewireAPI__ } from './endPhase';
import PHASE from './../../../constants/phases';
import { GameRecord } from './../../../constants/records';

describe('src/shared/reducers/game/thunks/endPhase', () => {
    let dispatch;
    let getState;
    beforeEach(() => {
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getNextPhase', () => 0);
        __RewireAPI__.__Rewire__('setPhase', () => 1);
        __RewireAPI__.__Rewire__('setHands', () => 2);
        __RewireAPI__.__Rewire__('selectNextCard', () => 3);
    });

    it('should be a function', () => {
        expect(endPhase()).toBeA('function');
    });

    describe('Given the current phase is card selection, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({
                phase: PHASE.CARD_SELECTION
            }));
            getState = () => ({
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and resetGame', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('Given the current phase is piece selection, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({
                phase: PHASE.PIECE_SELECTION
            }));
            getState = () => ({
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and resetGame', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('Given the next phase will be hand selection, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({
                phase: PHASE.PIECE_SELECTION
            }));
            getState = () => ({
                settings: new Map({
                    randomHand: false
                })
            });
            __RewireAPI__.__Rewire__('getNextPhase', () => PHASE.HAND_SELECTION);
        });

        it('should dispatch setPhase and getNextCardForHand', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Given the next phase will be PHASE.CARD_SELECTION, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({
                phase: PHASE.PIECE_SELECTION
            }));
            getState = () => ({
                settings: new Map({
                    randomHand: false
                })
            });
            __RewireAPI__.__Rewire__('getNextPhase', () => PHASE.CARD_SELECTION);
        });

        it('should dispatch setPhase and selectNextCard', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});