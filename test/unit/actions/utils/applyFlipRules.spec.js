import expect from 'expect';
import ApplyFlipRules from './../../../../src/shared/actions/utils/applyFlipRules';
import { applyFlipRules, __RewireAPI__ as applyFlipRulesRewireAPI } from './../../../../src/shared/actions/utils/applyFlipRules';

describe('applyFlipRules utility', () => {

    beforeEach(() => {
        ApplyFlipRules.__Rewire__('basicRule', function(){
            return [0,1,5];
        });

        ApplyFlipRules.__Rewire__('sameRule', function(){
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