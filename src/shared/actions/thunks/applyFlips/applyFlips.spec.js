import expect from 'expect';
import { Map } from 'immutable';
import { applyFlips, __RewireAPI__ } from './applyFlips';

describe('APPLY_FLIPS async action creator', () => {
    let dispatch;
    let getState;
    let updateBoard;
    beforeEach(() => {
        dispatch = expect.createSpy();
        getState = () => ({});
        updateBoard = expect.createSpy().andCall(() => 'updateBoard');
        __RewireAPI__.__Rewire__('updateBoard', updateBoard);
    });

    it('should be a function', () => {
        expect(applyFlips()).toBeA('function');
    });

    describe('Given a collection of pairs of card index, card owner that tell how to flip a card', () => {
       let tuples;
       beforeEach(() => {
           tuples = [{ index: 0, owner: 1 }, { index: 1, owner: 1 }];
           __RewireAPI__.__Rewire__('getFlips', () => tuples);
           applyFlips()(dispatch, getState);
       });

       describe('When flips are applied', () => {
           it('should call dispatch for each tuple', () => {
               expect(dispatch.calls.length).toEqual(tuples.length);
           });

           it('should call call updateBoard with each tuple', () => {
               for(var i = 0; i < tuples.length; i++) {
                   expect(updateBoard).toHaveBeenCalledWith(tuples[i].index, tuples[i].owner);
               }
           });

           it('should call dispatch for each tuple with the result of updateBoard', () => {
               for(var i = 0; i < tuples.length; i++) {
                   expect(dispatch.calls[i].arguments).toEqual(['updateBoard']);
               }
           });
       });
    });
});