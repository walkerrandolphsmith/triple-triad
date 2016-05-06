import expect from 'expect';
import { Map } from 'immutable';
import { settingUpdated } from './settingUpdated';

describe('src/shared/reducers/settings/mutations/settingUpdated', () => {
    describe('Given settings state and payload with setting of randomHand', () => {
        let state;
        let payload;
        let setting = 'randomHand';
        beforeEach(() => {
            state = new Map({
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            });
            payload = {
                setting: setting
            };
        });

        describe('When updating settings', () => {
            let actual;
            beforeEach(() => {
                actual = settingUpdated(state, payload);
            });

            it('should set the randomHand state to true', () => {
                expect(actual.get(setting)).toEqual(!state.get(setting));
            });
        });
    });
});