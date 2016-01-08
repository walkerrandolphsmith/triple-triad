import expect from 'expect';
import { getCardsToAdd } from './../../../../src/shared/action-creators/utils';

describe('getCardsToAdd utility', () => {

    it('should be a function', () => {
        expect(getCardsToAdd).toBeA('function');
    });

});