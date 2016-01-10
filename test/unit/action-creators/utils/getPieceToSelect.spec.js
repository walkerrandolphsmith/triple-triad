import expect from 'expect';
import { getPieceToSelect } from './../../../../src/shared/action-creators/utils/utils';

describe('getPieceToSelect utility', () => {

    it('should be a function', () => {
        expect(getPieceToSelect).toBeA('function');
    });

});