import expect from 'expect';
import { isCurrentPlayerMe } from './isCurrentPlayerMe';

describe('src/shared/utils/isCurrentPlayerMe', () => {
    describe('Given a current player id and a player id that are the same', () => {
        let currentPlayer;
        let player;
        beforeEach(() => {
            currentPlayer = player = 20;
        });

        describe('When invoking isCurrentPlayerMe', () => {
            let actual;
            beforeEach(() => {
                actual = isCurrentPlayerMe(currentPlayer, player);
            });

            it('should return true', () => {
                expect(actual).toBe(true);
            });
        });
    });

    describe('Given a current player id and a player id that are not the same', () => {
        let currentPlayer;
        let player;
        beforeEach(() => {
            currentPlayer = 21;
            player = 20;
        });

        describe('When invoking isCurrentPlayerMe', () => {
            let actual;
            beforeEach(() => {
                actual = isCurrentPlayerMe(currentPlayer, player);
            });

            it('should return false', () => {
                expect(actual).toBe(false);
            });
        });
    });
});