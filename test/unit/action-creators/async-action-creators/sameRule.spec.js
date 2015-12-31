import expect from 'expect';
import { fromJS } from 'immutable';
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
                game: fromJS({
                    board: [null, null, null, null, card, null, null, null, null]
                })
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
                game: fromJS({
                    board: [null, null, null, adjacentCard, card, null, null, null, null]
                })
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('Given cards to left and right have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, null, null, adjacentCard, card, adjacentCardTwo, null, null, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });
    });

    describe('Given cards to top and bottom have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, adjacentCard, null, null, card, null, null, adjacentCardTwo, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 1, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 7, owner: player} });
        });
    });

    describe('Given cards to left and top have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, adjacentCard, null, adjacentCardTwo, card, null, null, null, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 1, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });
    });

    describe('Given cards to left and bottom have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, null, null, adjacentCard, card, null, null, adjacentCardTwo, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 7, owner: player} });
        });
    });

    describe('Given cards to right and top have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, adjacentCard, null, null, card, adjacentCardTwo, null, null, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 1, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });
    });

    describe('Given cards to right and bottom have equal rank to your card on the sides that are touching', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: fromJS({
                    board: [null, null, null, null, card, adjacentCard, null, adjacentCardTwo, null]
                })
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            sameRule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 7, owner: player} });
        });
    });
});