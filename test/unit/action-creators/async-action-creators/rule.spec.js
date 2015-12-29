import expect from 'expect';
import {rule} from './../../../../src/shared/action-creators/asyncActionCreators';

describe('RULE async action creator', () => {

    let dispatch, index, player, opponent, card;
    beforeEach(() => {
        dispatch = expect.createSpy();
        index = 4;
        player = 1;
        opponent = 2;
        card = { owner: player, rank: { left: 5, top: 5, right: 5, bottom: 5} }
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
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
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

    describe('Given one adjacent card where you flip', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCard, card, null, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with payload of index of card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });
    });

    describe('Given one adjacent card where you get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCard = { owner: opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCard, card, null, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of your card and opponent owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });
    });

    describe('Given two adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
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

    describe('Given two adjacent cards where you flip one', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });
    });

    describe('Given two adjacent cards where you flip two', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });
    });

    describe('Given two adjacent cards where you flip one and get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index your card and player opponent', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });
    });

    describe('Given two adjacent cards where you only get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, null, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index your card and player opponent', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });
    });

    describe('Given three adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
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

    describe('Given three adjacent cards where you flip one', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });
    });

    describe('Given three adjacent cards where you flip two', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });
    });


    describe('Given three adjacent cards where you flip three', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of third card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 1, owner: player} });
        });
    });

    describe('Given three adjacent cards where you flip one and you get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of your card and opponent owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });
    });

    describe('Given three adjacent cards where you flip two and you get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 3, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of second card to flip and player owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: 5, owner: player} });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of your card and opponent owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });
    });

    describe('Given three adjacent cards where you only get flipped', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} };
            getState = () => ({
                game: {
                    board: [null, adjacentCardThree, null, adjacentCardOne, card, adjacentCardTwo, null, null, null]
                }
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of your card and opponent owner', () => {
            rule(index)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({ type: 'UpdateBoard', payload: {index: index, owner: opponent} });
        });
    });

    describe('Given four adjacent cards with no flips', () => {

        let getState;
        beforeEach(() => {
            let adjacentCardOne = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardTwo = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardThree = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
            let adjacentCardFour = { owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} };
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