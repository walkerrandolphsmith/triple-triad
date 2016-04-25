import expect from 'expect';
import { Map } from 'immutable';
import updateFocusSetting from './updateFocusSetting';

describe('src/shared/reducers/settings/updateFocusSettings', () => {
    describe('Given settings state and payload with setting of randomHand', () => {
        let state;
        let payload;
        let setting = 'randomHand';
        beforeEach(() => {
            state = new Map({
                focused: -1
            });
            payload = {
                setting: setting
            };
        });

        describe('When updating focused setting', () => {
            let actual;
            beforeEach(() => {
                actual = updateFocusSetting(state, payload);
            });

            it('should set the focused state to the given setting', () => {
                expect(actual.get('focused')).toEqual(setting);
            });
        });
    });
});