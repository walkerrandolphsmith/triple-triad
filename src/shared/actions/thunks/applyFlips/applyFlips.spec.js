import expect from 'expect';
import { Map } from 'immutable';
import ApplyFlips from './applyFlips';
import { applyFlips, __RewireAPI__ as applyFlipsRewireAPI } from './applyFlips';

describe('APPLY_FLIPS async action creator', () => {

    let dispatch, getState;
    beforeEach(() => {
       dispatch = expect.createSpy();
       getState = () => ({
           game: new Map({
               selectedPiece: 1
           })
       })
    });

    it('should be a function', () => {
       expect(applyFlips()).toBeA('function');
    });

    it('should dispatch UPDATE_BOARD action for each tuple (index, owner)', () => {
        ApplyFlips.__Rewire__('applyFlipRules', function(){
            return [
                {index: 1, owner: 1},
                {index: 3, owner: 2},
                {index: 5, owner: 1},
                {index: 7, owner: 1}
            ];
        });

        ApplyFlips.__Rewire__('updateBoard', function(){
            return 1;
        });

        applyFlips()(dispatch, getState);
        expect(dispatch.calls.length).toEqual(4)
        expect(dispatch.calls[0].arguments).toEqual([1])
    });

});