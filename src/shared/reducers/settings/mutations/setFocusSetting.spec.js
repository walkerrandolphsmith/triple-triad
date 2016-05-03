import expect from 'expect';
import { Map } from 'immutable';
import { setFocusSetting } from './../settings';

describe('src/shared/reducers/settings/setFocusSetting', () => {
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
                actual = setFocusSetting(state, payload);
            });

            it('should set the focused state to the given setting', () => {
                expect(actual.get('focused')).toEqual(setting);
            });
        });
    });
});