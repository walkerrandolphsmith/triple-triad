import expect from 'expect';
import { Map } from 'immutable';
import EndPhase from './../../../../src/shared/actions/thunks/endPhase';
import { endPhase, __RewireAPI__ as endPhaseRewireAPI } from './../../../../src/shared/actions/thunks/endPhase';

describe('END_PHASE async action creator', () => {

    let dispatch;
    beforeEach(() => {
        dispatch = expect.createSpy();
        EndPhase.__Rewire__('setPhase', function() {
            return 1;
        });

        EndPhase.__Rewire__('setHands', function() {
            return 2;
        });

        EndPhase.__Rewire__('getNextSelectedCard', function() {
            return 3;
        });

        EndPhase.__Rewire__('getNextCardForHand', function() {
            return 4;
        });

        EndPhase.__Rewire__('resetGame', function() {
            return 5;
        });
    });

    it('should be a function', () => {
        expect(endPhase()).toBeA('function');
    });

    describe('Given the current phase is card selection, When the phase is ended', () => {

        let getState;
        beforeEach(() => {
            EndPhase.__Rewire__('getNextPhase', function() {
                return 0;
            });
            getState = () => ({
                game: new Map({
                    phase: 'cardSelection'
                }),
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and resetGame', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
            expect(dispatch).toHaveBeenCalledWith(5)
        });
    });

    describe('Given the current phase is piece selection, When the phase is ended', () => {

        let getState;
        beforeEach(() => {
            EndPhase.__Rewire__('getNextPhase', function() {
                return 0;
            });
            getState = () => ({
                game: new Map({
                    phase: 'pieceSelection'
                }),
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and resetGame', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
            expect(dispatch).toHaveBeenCalledWith(5)
        });
    });

    describe('Given the next phase will be hand selection, When the phase is ended', () => {

        let getState;
        beforeEach(() => {
            EndPhase.__Rewire__('getNextPhase', function() {
                return 'handSelection';
            });
            getState = () => ({
                game: new Map({
                    phase: 'pieceSelection'
                }),
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and getNextCardForHand', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
            expect(dispatch).toHaveBeenCalledWith(4)
        });
    });

    describe('Given the next phase will be round, When the phase is ended', () => {

        let getState;
        beforeEach(() => {
            EndPhase.__Rewire__('getNextPhase', function() {
                return 'round';
            });
            getState = () => ({
                game: new Map({
                    phase: 'pieceSelection'
                }),
                settings: new Map({
                    randomHand: false
                })
            });
        });

        it('should dispatch setPhase and getNextCardForHand', () => {
            endPhase()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
            expect(dispatch).toHaveBeenCalledWith(2)
            expect(dispatch).toHaveBeenCalledWith(3)
        });
    });

});