import expect from 'expect';
import { gameDeletionFailed } from './gameDeletionFailed';

describe('src/shared/reducers/game/mutations/gameDeletionFailed', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = { id: 0 };
        });

        describe('When the game deletion failed', () => {
            expect(gameDeletionFailed(state)).toEqual(state);
        });
    });
});