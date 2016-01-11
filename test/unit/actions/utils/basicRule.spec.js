import expect from 'expect';
import { fromJS, Map, List } from 'immutable';
import { basicRule } from './../../../../src/shared/actions/utils';

describe('BASIC RULE utility', () => {

    let index, player, opponent, card;
    beforeEach(() => {
        index = 4;
        player = 1;
        opponent = 2;
        card = fromJS({ boardIndex: 4, owner:  player, rank: { left: 4, top: 4, right: 5, bottom: 5} });
    });

    it('should be a function', () => {
        expect(basicRule).toBeA('function');
    });

    describe('Given you place the first card', () => {

        let game;
        beforeEach(() => {
            let deck = [card];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, game)).toEqual([]);
        });
    });

    describe('Given one adjacent card with no flips', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} });
            let deck = [adjacentCard, card];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, game)).toEqual([]);
        });
    });

    describe('Given one adjacent card where you flip', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let deck = [adjacentCard, card];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with index of card to flip and player owner', () => {
            expect(basicRule(index, game)) .toEqual([{index: 3, owner: player}]);
        });
    });

    describe('Given one adjacent card where you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCard = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} });
            let deck = [adjacentCard, card];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the index of your card and opponent owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given two adjacent cards with no flips', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, game)) .toEqual([]);
        });
    });

    describe('Given two adjacent cards where you flip one', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the index of card to flip and player owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player}
            ]);
        });
    });

    describe('Given two adjacent cards where you flip two', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index of first and second card to flip and player owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });

    describe('Given two adjacent cards where you flip one and get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first card to flip and the placed cards index,owner ', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given two adjacent cards where you only get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the placed cards index,owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given three adjacent cards with no flips', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, game)) .toEqual([]);
        });
    });

    describe('Given three adjacent cards where you flip one', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the index, owner of the card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player}
            ]);
        });
    });

    describe('Given three adjacent cards where you flip two', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner: opponent, rank: {left: 5, top: 5, right: 3, bottom: 5}});
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner: opponent, rank: {left: 4, top: 5, right: 5, bottom: 5}});
            let adjacentCardThree = fromJS({ boardIndex: 1, owner: opponent, rank: {left: 5, top: 5, right: 5, bottom: 4}});
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck: new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first and second card to flip', () => {
            expect(basicRule(index, game)).toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });


    describe('Given three adjacent cards where you flip three', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 3, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 3} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first, second, and third card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 1, owner: player},
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });

    describe('Given three adjacent cards where you flip one and you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first card to flip and the placed cards index,owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given three adjacent cards where you flip two and you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain three tuples with the index, owner of first and second card to flip and the placed cards index,owner', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given three adjacent cards where you only get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the index, owner of the placed card', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given four adjacent cards with no flips', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 4, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, game)) .toEqual([]);
        });
    });
    describe('Given four adjacent cards where you flip one', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain a tuple with the index, owner of first card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player}
            ]);
        });
    });

    describe('Given four adjacent cards where you flip two', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first and second card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });


    describe('Given three adjacent cards where you flip three', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 3} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain three tuples with the index, owner of first, second, and third card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 1, owner: player},
                {index: 3, owner: player},
                {index: 5, owner: player}
            ]);
        });
    });

    describe('Given three adjacent cards where you flip four', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 3} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 4, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first, second, third, and forth card to flip', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 1, owner: player},
                {index: 3, owner: player},
                {index: 5, owner: player},
                {index: 7, owner: player}
            ]);
        });
    });

    describe('Given four adjacent cards where you flip one and you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 4} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given four adjacent cards where you flip two and you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain three tuples with the index, owner of first and second card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 3, owner: player},
                {index: 5, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });


    describe('Given four adjacent cards where you flip three and you get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 3, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 4, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 3} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 6, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of first, second, and third card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: 1, owner: player},
                {index: 3, owner: player},
                {index: 5, owner: player},
                {index: index, owner: opponent}
            ]);
        });
    });

    describe('Given four adjacent cards where you only get flipped', () => {

        let game;
        beforeEach(() => {
            let adjacentCardOne = fromJS({ boardIndex: 3, owner:  opponent, rank: { left: 5, top: 5, right: 6, bottom: 5} });
            let adjacentCardTwo = fromJS({ boardIndex: 5, owner:  opponent, rank: { left: 6, top: 5, right: 5, bottom: 5} });
            let adjacentCardThree = fromJS({ boardIndex: 1, owner:  opponent, rank: { left: 5, top: 5, right: 5, bottom: 6} });
            let adjacentCardFour = fromJS({ boardIndex: 7, owner:  opponent, rank: { left: 5, top: 6, right: 5, bottom: 5} });
            let deck = [adjacentCardThree,  adjacentCardOne, card, adjacentCardTwo,  adjacentCardFour];
            game = new Map({
                deck : new List(deck)
            });
        });

        it('should contain two tuples with the index, owner of card placed', () => {
            expect(basicRule(index, game)) .toEqual([
                {index: index, owner: opponent}
            ]);
        });
    });

});