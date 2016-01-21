import expect from 'expect';
import { Map, List } from 'immutable';
import { sameRule } from './../../../../src/shared/actions/utils';

describe('SAME_RULE async action creator', () => {

    let index, player, opponent, card;
    beforeEach(() => {
        index = 4;
        player = 1;
        opponent = 2;
        card = new Map({ boardIndex: 4, owner: player, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) })
    });

    it('should be a function', () => {
        expect(sameRule).toBeA('function');
    });

    describe('Given you place the first card', () => {

        let game;
        beforeEach(() => {
            let deck = [card];
            game = new Map({
                deck: new List(deck)
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, game)).toEqual([])
        });
    });

    describe('Given one adjacent card', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = new Map({ boardIndex: 5, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [card, adjacentCard];
            game = new Map({
                deck: new List(deck)
            });
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, game)).toEqual([])
        });
    });

    describe('Given cards to left and right have equal rank to your card on the sides that are touching', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = new Map({ boardIndex: 3, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 5, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [adjacentCard, card, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
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
            let adjacentCard = new Map({ boardIndex: 1, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 7, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [adjacentCard, card, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
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
            let adjacentCard = new Map({ boardIndex: 3, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 1, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [adjacentCard, adjacentCardTwo, card];
            game = new Map({
                deck: new List(deck)
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
            let adjacentCard = new Map({ boardIndex: 3, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 7, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [adjacentCard, card, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
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
            let adjacentCard = new Map({ boardIndex: 5, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 1, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [adjacentCard, card, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
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
            let adjacentCard = new Map({ boardIndex: 5, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let adjacentCardTwo = new Map({ boardIndex: 7, owner: opponent, rank: new Map({ left: 5, top: 5, right: 5, bottom: 5}) });
            let deck = [card, adjacentCard, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
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