import expect from 'expect';
import { gameDeletionRequested } from './gameDeletionRequested';

describe('src/shared/reducers/game/mutations/gameDeletionRequested', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = { id: 0 };
        });

        describe('When the game deletion requested', () => {
            expect(gameDeletionRequested(state)).toEqual(state);
        });
    });
});