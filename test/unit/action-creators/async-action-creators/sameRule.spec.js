import expect from 'expect';
import {sameRule} from './../../../../src/shared/action-creators/';

describe('SAME_RULE async action creator', () => {

    let dispatch, index, player, opponent, card;
    beforeEach(() => {
        dispatch = expect.createSpy();
        index = 4;
        player = 1;
        opponent = 2;
        card = { owner: player, rank: { left: 5, top: 5, right: 5, bottom: 5} }
    });

    it('should be a function', () => {
        expect(sameRule(index)).toBeA('function');
    });

    describe('Given you place the first card', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: {
                    board: [null, null, null, null, card, null, null, null, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given one adjacent card', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCard, card, null, null, null, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

});