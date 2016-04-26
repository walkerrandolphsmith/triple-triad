import expect from 'expect';
import { getPieceToSelect } from './getPieceToSelect';

describe('src/shared/actions/utils/getPieceToSelect', () => {
    it('should be a function', () => {
        expect(getPieceToSelect).toBeA('function');
    });
});