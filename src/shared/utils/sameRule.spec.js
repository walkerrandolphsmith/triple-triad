import expect from 'expect';
import { Map, List } from 'immutable';
import { sameRule, __RewireAPI__ } from './sameRule';
import { GameRecord, CardRecord, RankRecord } from './../constants/records';

describe('src/shared/actions/utils/sameRule', () => {
    let index;
    let player;
    let opponent;
    let card;
    let deck;
    beforeEach(() => {
        index = 4;
        player = 1;
        opponent = 2;
        card = new CardRecord({ boardIndex: 4, owner: player, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
    });

    it('should be a function', () => {
        expect(sameRule).toBeA('function');
    });

    describe('Given you place the first card', () => {
        beforeEach(() => {
            deck = new List([card]);
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, deck)).toEqual([]);
        });
    });

    describe('Given one adjacent card', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [card, adjacentCard];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not dispatch UPDATE_BOARD action', () => {
            expect(sameRule(index, deck)).toEqual([]);
        });
    });

    describe('Given cards to left and right have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCard, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });

    describe('Given cards to top and bottom have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCard, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 1, owner: player },
                { index: 7, owner: player }
            ]);
        });
    });

    describe('Given cards to left and top have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCard, adjacentCardTwo, card];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 1, owner: player },
                { index: 3, owner: player }
            ]);
        });
    });

    describe('Given cards to left and bottom have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCard, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 3, owner: player },
                { index: 7, owner: player }
            ]);
        });
    });

    describe('Given cards to right and top have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCard, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 1, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });

    describe('Given cards to right and bottom have equal rank to your card on the sides that are touching', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [card, adjacentCard, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should dispatch UPDATE_BOARD action with a payload of index of first card to flip and player owner', () => {
            expect(sameRule(index, deck)).toEqual([
                { index: 5, owner: player },
                { index: 7, owner: player }
            ]);
        });
    });
});