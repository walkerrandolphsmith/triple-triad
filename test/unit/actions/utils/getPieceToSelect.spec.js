import expect from 'expect';
import { getPieceToSelect } from './../../../../src/shared/actions/utils';

describe('getPieceToSelect utility', () => {

    it('should be a function', () => {
        expect(getPieceToSelect).toBeA('function');
    });

});