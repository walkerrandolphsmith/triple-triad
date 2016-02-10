import expect from 'expect';
import { getPieceToSelect } from './getPieceToSelect';

describe('getPieceToSelect utility', () => {

    it('should be a function', () => {
        expect(getPieceToSelect).toBeA('function');
    });

});