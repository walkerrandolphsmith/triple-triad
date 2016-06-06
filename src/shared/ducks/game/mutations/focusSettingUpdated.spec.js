import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { focusSettingUpdated } from './focusSettingUpdated';

describe('src/shared/reducers/settings/mutations/focusSettingUpdated', () => {
    describe('Given settings state and payload with setting of randomHand', () => {
        let state;
        let payload;
        let setting = 'randomHand';
        beforeEach(() => {
            const currentGameId = 20;
            state = new Map({
                gameRoute: currentGameId,
                games: new List([
                    new GameRecord({ id: currentGameId })
                ])
            });
            payload = {
                setting: setting
            };
        });

        describe('When updating focused setting', () => {
            let actual;
            beforeEach(() => {
                actual = focusSettingUpdated(state, payload);
            });

            it('should set the focused state to the given setting', () => {
                expect(actual.get('games').first().settings.focused).toEqual(setting);
            });
        });
    });
});