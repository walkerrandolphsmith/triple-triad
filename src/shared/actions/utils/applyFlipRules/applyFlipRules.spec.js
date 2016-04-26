import expect from 'expect';
import { applyFlipRules, __RewireAPI__ } from './applyFlipRules';

describe('src/shared/actions/utils/applyFlipRules', () => {
    beforeEach(() => {
        __RewireAPI__.__Rewire__('basicRule', () => [0, 1, 5]);
        __RewireAPI__.__Rewire__('sameRule', () => [0, 1, 2, 3, 4]);
    });

    it('should be a function', () => {
        expect(applyFlipRules).toBeA('function');
    });

    it('should contains unique elements in the union of the rules.', () => {
        expect(applyFlipRules()).toEqual([0, 1, 5, 2, 3, 4]);
    });
});