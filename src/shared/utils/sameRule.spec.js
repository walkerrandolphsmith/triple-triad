import expect from 'expect';
import { sameRule, __RewireAPI__ } from './sameRule';
import { CardRecord, RankRecord } from './../ducks/game/records';

describe('src/shared/actions/utils/sameRule', () => {
    let flippedIndex;
    let index = 1;
    let deck = [];
    let card;
    beforeEach(() => {
        index = 4;
        card = new CardRecord({ boardIndex: 4, owner: 0, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
    });

    it('should be a function', () => {
        expect(sameRule).toBeA('function');
    });

    describe('Given shouldApplySameRuleLeftAndRight', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('shouldApplySameRuleLeftAndRight', () => false);
            __RewireAPI__.__Rewire__('shouldApplySameRuleAboveAndBelow', () => false);
            __RewireAPI__.__Rewire__('shouldApplySameRuleAboveAndLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplySameRuleBelowAndLeft', () => false);
            __RewireAPI__.__Rewire__('shouldApplySameRuleAboveAndRight', () => false);
            __RewireAPI__.__Rewire__('shouldApplySameRuleBelowAndRight', () => false);
            __RewireAPI__.__Rewire__('getSurroundings', () => ({
                card: card,
                above: { card: null, index: -1 },
                below: { card: null, index: -1 },
                left: { card: null, index: -1 },
                right: { card: null, index: -1 }
            }));
        });

        it('should not contain any tuples', () => {
            expect(sameRule(index, deck)).toEqual([]);
        });
    });
});