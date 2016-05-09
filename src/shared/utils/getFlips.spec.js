import expect from 'expect';
import { getFlips, __RewireAPI__ } from './getFlips';

describe('src/shared/actions/utils/getFlips', () => {
    beforeEach(() => {
        __RewireAPI__.__Rewire__('basicRule', () => [0, 1, 5]);
        __RewireAPI__.__Rewire__('sameRule', () => [0, 1, 2, 3, 4]);
    });

    it('should be a function', () => {
        expect(getFlips).toBeA('function');
    });

    it('should contains unique elements in the union of the rules.', () => {
        expect(getFlips()).toEqual([0, 1, 5, 2, 3, 4]);
    });
});