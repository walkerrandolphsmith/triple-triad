import expect from 'expect';
import { Map } from 'immutable';
import { setHands, __RewireAPI__ } from './setHands';

describe('src/shared/reducers/game/thunks/setHands', () => {
    let dispatch;
    let getState;
    beforeEach(() => {
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(setHands()).toBeA('function');
    });

    describe('Given random hand is disabled', () => {
        beforeEach(() => {
            const settings = new Map({ randomHand: false });
            getState = () => ({
                settings: settings
            });
        });

        it('should dispatch SET_HAND action', () => {
            __RewireAPI__.__Rewire__('setHand', () => 1);
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('Given random hand is enabled', () => {
        beforeEach(() => {
            const settings = new Map({ randomHand: true });
            getState = () => ({
                settings: settings
            });
        });

        it('should dispatch SET_HAND action given the player in the payload', () => {
            __RewireAPI__.__Rewire__('setHand', () => 1);
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });
});