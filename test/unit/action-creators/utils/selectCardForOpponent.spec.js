import expect from 'expect';
import { selectCardForOpponent } from './../../../../src/shared/action-creators/utils/utils';

describe('selectCardForOpponent utility', () => {

    it('should be a function', () => {
        expect(selectCardForOpponent).toBeA('function');
    });

});