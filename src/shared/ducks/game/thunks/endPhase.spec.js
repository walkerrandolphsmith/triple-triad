import expect from 'expect';
import { Map } from 'immutable';
import { endPhase, __RewireAPI__ } from './endPhase';
import PHASE from './../../../constants/phases';

describe('END_PHASE async action creator', () => {
    let dispatch;
    let getState;
    beforeEach(() => {
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getNextPhase', () => 0);
        __RewireAPI__.__Rewire__('setPhase', () => 1);
        __RewireAPI__.__Rewire__('setHands', () => 2);
        __RewireAPI__.__Rewire__('getNextSelectedCard', () => 3);
        __RewireAPI__.__Rewire__('getNextCardForHand', () => 4);
    });

    it('should be a function', () => {
        expect(endPhase()).toBeA('function');
    });

    describe('Given the current phase is card selection, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new Map({
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
            __RewireAPI__.__Rewire__('currentGameSelector', () => new Map({
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
            __RewireAPI__.__Rewire__('currentGameSelector', () => new Map({
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
            expect(dispatch).toHaveBeenCalledWith(4);
        });
    });

    describe('Given the next phase will be round, When the phase is ended', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new Map({
                phase: PHASE.PIECE_SELECTION
            }));
            getState = () => ({
                settings: new Map({
                    randomHand: false
                })
            });
            __RewireAPI__.__Rewire__('getNextPhase', () => 'round');
        });

        it('should dispatch setPhase and getNextCardForHand', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});