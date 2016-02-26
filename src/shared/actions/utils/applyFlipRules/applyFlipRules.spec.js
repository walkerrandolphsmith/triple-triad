import expect from 'expect';
import ApplyFlipRules from './applyFlipRules';
import { applyFlipRules, __RewireAPI__ as applyFlipRulesRewireAPI } from './applyFlipRules';

describe('applyFlipRules utility', () => {

    beforeEach(() => {
        ApplyFlipRules.__Rewire__('basicRule', () => {
            return [0,1,5];
        });

        ApplyFlipRules.__Rewire__('sameRule', () => {
            return [0,1,2,3,4];
        });
    });

    it('should be a function', () => {
        expect(applyFlipRules).toBeA('function');
    });

    it('should contains unique elements in the union of the rules.', () => {
        expect(applyFlipRules()).toEqual([0,1,5,2,3,4])
    });

});