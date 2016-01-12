import expect from 'expect';
import { fromJS } from 'immutable';
import SetHands from './../../../../src/shared/actions/thunks/setHands';
import { setHands, __RewireAPI__ as setHandsRewireAPI } from './../../../../src/shared/actions/thunks/setHands';

describe('SET_HANDS async action creator', () => {

    let dispatch, game, player, opponent;
    beforeEach(() => {
       player = 1;
       opponent = 2;
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
                settings: settings
            });
        });

        it('should dispatch SET_HAND action', () => {
            SetHands.__Rewire__('setHand', function(){
                return 1;
            });
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

    });

    describe('Given random hand is enabled', () => {

        let getState;
        beforeEach(() => {
            const settings = fromJS({ randomHand: true});
            getState = () => ({
                settings: settings
            });
        });

        it('should dispatch SET_HAND action given the player in the payload', () => {
            SetHands.__Rewire__('setHand', function(){
                return 1;
            });
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
            expect(dispatch).toHaveBeenCalledWith(1)
        });

    });

});