import expect from 'expect';
import { selectCardForOpponent } from './../../../../src/shared/actions/utils';

describe('selectCardForOpponent utility', () => {

    it('should be a function', () => {
        expect(selectCardForOpponent).toBeA('function');
    });

});