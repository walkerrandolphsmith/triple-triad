import expect from 'expect';
import { List } from 'immutable';
import { basicRule, __RewireAPI__ } from './basicRule';
import { CardRecord, RankRecord } from './../constants/records';

describe('src/shared/actions/utils/basicRule', () => {
    let index;
    let player;
    let opponent;
    let card;
    let deck;
    beforeEach(() => {
        index = 4;
        player = 1;
        opponent = 2;
        card = new CardRecord({
            boardIndex: 4, owner: player, rank: new RankRecord({ left: 4, top: 4, right: 5, bottom: 5 }) 
        });
    });

    it('should be a function', () => {
        expect(basicRule).toBeA('function');
    });

    describe('Given you place the first card', () => {
        beforeEach(() => {
            deck = [card];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)).toEqual([]);
        });
    });

    describe('Given one adjacent card with no flips', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ 
                boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 4, bottom: 5 }) 
            });
            deck = [adjacentCard, card];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)).toEqual([]);
        });
    });

    describe('Given one adjacent card where you flip', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ 
                boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) 
            });
            deck = [adjacentCard, card];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with index of card to flip and player owner', () => {
            let expected = [
                { index: 3, owner: player }
            ];
            expect(basicRule(index, deck)) .toEqual(expected);
        });
    });

    describe('Given one adjacent card where you get flipped', () => {
        beforeEach(() => {
            let adjacentCard = new CardRecord({ 
                boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 6, bottom: 5 }) 
            });
            deck = [adjacentCard, card];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the index of your card and opponent owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given two adjacent cards with no flips', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ 
                boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 4, bottom: 5 }) 
            });
            let adjacentCardTwo = new CardRecord({ 
                boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) 
            });
            deck = [adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)) .toEqual([]);
        });
    });

    describe('Given two adjacent cards where you flip one', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the index of card to flip and player owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player }
            ]);
        });
    });

    describe('Given two adjacent cards where you flip two', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index of first and second card to flip and player owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });

    describe('Given two adjacent cards where you flip one and get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 6, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first card to flip and the placed cards index,owner ', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given two adjacent cards where you only get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 6, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 6, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the placed cards index,owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given three adjacent cards with no flips', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 4, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)) .toEqual([]);
        });
    });

    describe('Given three adjacent cards where you flip one', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the index, owner of the card to flip', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player }
            ]);
        });
    });

    describe('Given three adjacent cards where you flip two', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first and second card to flip', () => {
            expect(basicRule(index, deck)).toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });


    describe('Given three adjacent cards where you flip three', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 3, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 3 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first, second, and third card to flip', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 1, owner: player },
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });

    describe('Given three adjacent cards where you flip one and you get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 6, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first card to flip and the placed cards index,owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given three adjacent cards where you flip two and you get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 6 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain three tuples with the index, owner of first and second card to flip and the placed cards index,owner', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given three adjacent cards where you only get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 6 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the index, owner of the placed card', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given four adjacent cards with no flips', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 4, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should not contain tuples', () => {
            expect(basicRule(index, deck)) .toEqual([]);
        });
    });
    describe('Given four adjacent cards where you flip one', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain a tuple with the index, owner of first card to flip', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player }
            ]);
        });
    });

    describe('Given four adjacent cards where you flip two', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first and second card to flip', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });


    describe('Given three adjacent cards where you flip three', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 3 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain three tuples with the index, owner of first, second, and third card to flip', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 1, owner: player },
                { index: 3, owner: player },
                { index: 5, owner: player }
            ]);
        });
    });

    describe('Given three adjacent cards where you flip four', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 3 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 4, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first, second, third, and forth card to flip', () => {
            expect(basicRule(index, deck)).toEqual([
                { index: 1, owner: player },
                { index: 3, owner: player },
                { index: 5, owner: player },
                { index: 7, owner: player }
            ]);
        });
    });

    describe('Given four adjacent cards where you flip one and you get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 6, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 4 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given four adjacent cards where you flip two and you get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 6 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain three tuples with the index, owner of first and second card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 3, owner: player },
                { index: 5, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });


    describe('Given four adjacent cards where you flip three and you get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 3, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 4, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 3 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 6, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of first, second, and third card to flip and the index,owner of the card placed', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: 1, owner: player },
                { index: 3, owner: player },
                { index: 5, owner: player },
                { index: index, owner: opponent }
            ]);
        });
    });

    describe('Given four adjacent cards where you only get flipped', () => {
        beforeEach(() => {
            let adjacentCardOne = new CardRecord({ boardIndex: 3, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 6, bottom: 5 }) });
            let adjacentCardTwo = new CardRecord({ boardIndex: 5, owner: opponent, rank: new RankRecord({ left: 6, top: 5, right: 5, bottom: 5 }) });
            let adjacentCardThree = new CardRecord({ boardIndex: 1, owner: opponent, rank: new RankRecord({ left: 5, top: 5, right: 5, bottom: 6 }) });
            let adjacentCardFour = new CardRecord({ boardIndex: 7, owner: opponent, rank: new RankRecord({ left: 5, top: 6, right: 5, bottom: 5 }) });
            deck = [adjacentCardThree, adjacentCardOne, card, adjacentCardTwo, adjacentCardFour];
            __RewireAPI__.__Rewire__('getBoard', () => new List(deck));
        });

        it('should contain two tuples with the index, owner of card placed', () => {
            expect(basicRule(index, deck)) .toEqual([
                { index: index, owner: opponent }
            ]);
        });
    });
});