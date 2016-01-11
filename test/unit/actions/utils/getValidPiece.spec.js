import expect from 'expect';
import { getValidPiece } from './../../../../src/shared/actions/utils';

describe('getValidPiece utility', () => {

    it('should be a function', () => {
        expect(getValidPiece).toBeA('function');
    });

});