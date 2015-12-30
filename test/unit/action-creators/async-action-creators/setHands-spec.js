import expect from 'expect';
import { fromJS } from 'immutable';
import {setHands} from './../../../../src/shared/action-creators/';

describe('SET_HANDS async action creator', () => {

    let dispatch, game, player, opponent;
    beforeEach(() => {
       player = 1;
       opponent = 2;
       game = {
           ownerType: {
               player: player,
               opponent: opponent
           }
       };
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
       expect(setHands()).toBeA('function');
    });

    describe('Given random hand is disabled', () => {

        let getState;
        beforeEach(() => {
            const settings = fromJS({ randomHand: false});
            getState = () => ({
                game: game,
                settings: settings
            });
        });

        it('should dispatch SET_HAND action', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: opponent}})
        });

    });

    describe('Given random hand is enabled', () => {

        let getState;
        beforeEach(() => {
            const settings = fromJS({ randomHand: true});
            getState = () => ({
                game: game,
                settings: settings
            });
        });

        it('should dispatch SET_HAND action given the player ownerType in the payload', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: player}})
        });

        it('should dispatch SET_HAND action given the opponent ownerType in the payload', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SetHand', payload: {owner: player}})
        });

        it('should dispatch NEXT_STEP', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'NextStep'})
        });

    });

});