import expect from 'expect';
import {rule} from './../../../../src/shared/action-creators/asyncActionCreators';

describe('RULE async action creator', () => {

    let dispatch, index, card;
    beforeEach(() => {
        dispatch = expect.createSpy();
        index = 4;
        card = { owner: 1, rank: { left: 5, top: 5, right: 5, bottom: 5} }
    });

    it('should be a function', () => {
        expect(rule(index)).toBeA('function');
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
            rule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given one adjacent card with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, card, adjacentCard, null, null, null, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given two adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given three adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given four adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardFour = { owner: 2, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, adjacentCardFour, null]
                }
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

});