import expect from 'expect';
import * as Actions from './../../../src/shared/action-creators/asyncActionCreators';

describe('SET_HANDS action creator', () => {
   it('should be a function', () => {
       expect(Actions.setHands()).toBeA('function');
   });

    describe('Given random hand is disabled', () => {

        it('should dispatch SET_HANDS action', () => {
            let ownerTypeOppoent = 2;
            const getState = () => ({
                game: {
                    ownerType: {
                        opponent: ownerTypeOppoent
                    }
                },
                settings: {
                    randomHand: false
                }
            });


            const dispatch = expect.createSpy();
            Actions.setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: ownerTypeOppoent}})
        });

    });
});