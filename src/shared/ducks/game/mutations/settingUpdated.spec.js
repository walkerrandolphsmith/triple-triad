import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { settingUpdated } from './settingUpdated';

describe('src/shared/reducers/settings/mutations/settingUpdated', () => {
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

        describe('When updating settings', () => {
            let actual;
            beforeEach(() => {
                actual = settingUpdated(state, payload);
            });

            it('should set the randomHand state to true', () => {
                
            });
        });
    });
});