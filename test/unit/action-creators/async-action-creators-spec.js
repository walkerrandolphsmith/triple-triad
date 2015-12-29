import expect from 'expect';
import * as Actions from './../../../src/shared/action-creators/asyncActionCreators';

describe('SET_HANDS action creator', () => {
   it('should be a function', () => {
       expect(Actions.setHands()).toBeA('function');
   });

    describe('Given random hand is disabled', () => {

        it('should dispatch SET_HAND action', () => {
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

    describe('Given random hand is enabled', () => {

        let getState, dispatch;
        let playerOwnerType, opponentOwnerType;
        beforeEach(() => {
            playerOwnerType = 1;
            opponentOwnerType = 2;
            getState = () => ({
                game: {
                    ownerType: {
                        player: playerOwnerType,
                        opponent:  opponentOwnerType
                    }
                },
                settings: {
                    randomHand: true
                }
            });
            dispatch = expect.createSpy();
        });

        it('should dispatch SET_HAND action given the player ownerType in the payload', () => {
            Actions.setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: playerOwnerType}})
        });

        it('should dispatch SET_HAND action given the opponent ownerType in the payload', () => {
            Actions.setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: opponentOwnerType}})
        });

        it('should dispatch NEXT_STEP', () => {
            Actions.setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'NextStep'})
        });

    });

});