import expect from 'expect';
import { fromJS, Map, List } from 'immutable';
import {sameRule} from './../../../../src/shared/action-creators/utils';

describe('SAME_RULE async action creator', () => {

    let index, player, opponent, card;
    beforeEach(() => {
        index = 4;
        player = 1;
        opponent = 2;
        card = fromJS({ owner: player, rank: { left: 5, top: 5, right: 5, bottom: 5} })
    });

    it('should be a function', () => {
        expect(sameRule).toBeA('function');
    });

    describe('Given you place the first card', () => {

        let game;
        beforeEach(() => {
            let board = [null, null, null, null, card, null, null, null, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, game)).toEqual([])
        });
    });

    describe('Given one adjacent card', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, null, null, null, card, adjacentCard, null, null, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, game)).toEqual([])
        });
    });

    describe('Given cards to left and right have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, null, null, adjacentCard, card, adjacentCardTwo, null, null, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });

    describe('Given cards to top and bottom have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, adjacentCard, null, null, card, null, null, adjacentCardTwo, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 1, owner: player},
                {index: 7, owner: player}
            ]);
        });
    });

    describe('Given cards to left and top have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, adjacentCard, null, adjacentCardTwo, card, null, null, null, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 1, owner: player},
                {index: 3, owner: player}
            ]);
        });
    });

    describe('Given cards to left and bottom have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, null, null, adjacentCard, card, null, null, adjacentCardTwo, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 3, owner: player},
                {index: 7, owner: player}
            ]);
        });
    });

    describe('Given cards to right and top have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, adjacentCard, null, null, card, adjacentCardTwo, null, null, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 1, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });

    describe('Given cards to right and bottom have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ owner: opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let board = [null, null, null, null, card, adjacentCard, null, adjacentCardTwo, null];
            game = new Map({
                board : new List(board)
            });
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, game)).toEqual([
                {index: 5, owner: player},
                {index: 7, owner: player}
            ]);
        });
    });
});