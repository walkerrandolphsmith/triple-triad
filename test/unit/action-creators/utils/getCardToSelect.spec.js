import expect from 'expect';
import { getCardToSelect } from './../../../../src/shared/action-creators/utils';

describe('getCardToSelect utility', () => {

    it('should be a function', () => {
        expect(getCardToSelect).toBeA('function');
    });

});