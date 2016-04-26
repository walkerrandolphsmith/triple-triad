import expect from 'expect';
import { getNextPhase } from './getNextPhase';
import PHASE from './../../../constants/phases';

describe('getNextPhase action creator utility', () => {
    let currentPhase;
    let randomHand;
    it('should be a function', () => {
        expect(getNextPhase).toBeA('function');
    });

    describe('Given the settings selection phase and random hand is enabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.SETTINGS_SELECTION;
            randomHand = true;
        });

        it('should return invite phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual(PHASE.INVITE);
        });
    });

    describe('Given the invite phase and random hand is enabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.INVITE;
            randomHand = true;
        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('round');
        });
    });

    describe('Given the invite phase and random hand is disabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.INVITE;
            randomHand = false;
        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual(PHASE.HAND_SELECTION);
        });
    });

    describe('Given the hand selection phase and random hand is enabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.HAND_SELECTION;
            randomHand = true;
        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual('round');
        });
    });

    describe('Given the card selection phase and random hand is enabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.CARD_SELECTION;
            randomHand = true;
        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual(PHASE.SETTINGS_SELECTION);
        });
    });

    describe('Given the piece selection phase and random hand is enabled, when getting the next phase', () => {
        beforeEach(() => {
            currentPhase = PHASE.PIECE_SELECTION;
            randomHand = true;
        });

        it('should return round phase', () => {
            expect(getNextPhase(currentPhase, randomHand)).toEqual(PHASE.SETTINGS_SELECTION);
        });
    });
});