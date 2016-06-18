import expect from 'expect';
import { basicRule, __RewireAPI__ } from './basicRule';
import { CardRecord, RankRecord } from './../ducks/game/records';

describe('src/shared/actions/utils/basicRule', () => {
    let flippedIndex = 1;
    let index = 0;
    let deck = [];
    let card;
    beforeEach(() => {
        card = new CardRecord({
            boardIndex: 4, owner: 0, rank: new RankRecord({ left: 4, top: 4, right: 5, bottom: 5 })
        });
    });

    it('should be a function', () => {
        expect(basicRule).toBeA('function');
    });

    describe('Given no adjacent cards', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleAbove', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleBelow', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleRight', () => false);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: -1 },
                below: { card: null, index: -1 },
                left: { card: null, index: -1 },
                right: { card: null, index: -1 }
            }));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)).toEqual([]);
        });
    });

    describe('Given the card above should be flipped', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleAbove', () => true);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleBelow', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleRight', () => false);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: flippedIndex },
                below: { card: null, index: -1 },
                left: { card: null, index: -1 },
                right: { card: null, index: -1 }
            }));
        });

        it('should contain a tuple with the index of the above card and owner of card', () => {
            expect(basicRule(index, deck)).toInclude({ index: flippedIndex, owner: card.owner, flipDirection: "flipped-up" });
        });
    });

    describe('Given the card below should be flipped', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleAbove', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleBelow', () => true);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleRight', () => false);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: -1 },
                below: { card: null, index: flippedIndex },
                left: { card: null, index: -1 },
                right: { card: null, index: -1 }
            }));
        });

        it('should contain a tuple with the index of the below card and owner of card', () => {
            expect(basicRule(index, deck)).toInclude({ index: flippedIndex, owner: card.owner, flipDirection: "flipped-down" });
        });
    });

    describe('Given the card to the left should be flipped', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleAbove', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleBelow', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleLeft', () => true);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleRight', () => false);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: -1 },
                below: { card: null, index: -1 },
                left: { card: null, index: flippedIndex },
                right: { card: null, index: -1 }
            }));
        });

        it('should contain a tuple with the index of the left card and owner of card', () => {
            expect(basicRule(index, deck)).toInclude({ index: flippedIndex, owner: card.owner, flipDirection: "flipped-left" });
        });
    });

    describe('Given the card to the right should be flipped', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleAbove', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleBelow', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplyBasicRuleRight', () => true);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: -1 },
                below: { card: null, index: -1 },
                left: { card: null, index: -1 },
                right: { card: null, index: flippedIndex }
            }));
        });

        it('should contain a tuple with the index of the right card and owner of card', () => {
            expect(basicRule(index, deck)).toInclude({ index: flippedIndex, owner: card.owner, flipDirection: "flipped-right" });
        });
    });
});