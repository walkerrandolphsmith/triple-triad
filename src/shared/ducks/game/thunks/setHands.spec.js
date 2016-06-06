import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { SettingsRecord } from './../../game/records';
import { setHands, __RewireAPI__ } from './setHands';

describe('src/shared/reducers/game/thunks/setHands', () => {
    let dispatch;
    let getState;
    beforeEach(() => {
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('setHand', () => 1);
    });

    it('should be a function', () => {
        expect(setHands()).toBeA('function');
    });

    describe('Given random hand is disabled', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => ({
                owner: 1,
                opponent: 2,
                settings: new SettingsRecord({ randomHand: false })
            }));
            getState = () => ({})
        });

        it('should dispatch SET_HAND action', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('Given random hand is enabled', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => ({
                owner: 1,
                opponent: 2,
                settings: new SettingsRecord({ randomHand: true })
            }));
            getState = () => ({})
        });

        it('should dispatch SET_HAND action given the player in the payload', () => {
            setHands()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });
});