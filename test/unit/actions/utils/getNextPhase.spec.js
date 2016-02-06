import expect from 'expect';
import { getNextPhase } from './../../../../src/shared/actions/utils';

describe('getNextPhase action creator utility', () => {

    it('should be a function', () => {
        expect(getNextPhase).toBeA('function');
    });

    describe('Given the settings selection phase and random hand is enabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'settingsSelection';
            randomHand = true;

        });

        it('should return invite phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('invite')
        });
    });

    describe('Given the invite phase and random hand is enabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'invite';
            randomHand = true;

        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('round')
        });
    });

    describe('Given the invite phase and random hand is disabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'invite';
            randomHand = false;

        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('handSelection')
        });
    });

    describe('Given the hand selection phase and random hand is enabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'handSelection';
            randomHand = true;

        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('round')
        });
    });

    describe('Given the card selection phase and random hand is enabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'cardSelection';
            randomHand = true;

        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('settingsSelection')
        });
    });

    describe('Given the piece selection phase and random hand is enabled, when getting the next phase', () => {

        let currentPhase, randomHand;
        beforeEach(() => {
            currentPhase = 'pieceSelection';
            randomHand = true;

        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('settingsSelection')
        });
    });


});