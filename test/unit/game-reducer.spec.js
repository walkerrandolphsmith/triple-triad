import expect from 'expect';
import _ from 'lodash';
import reducer from './../../src/shared/reducers/game';
import * as types from './../../src/shared/constants/action-types';
import deck from './../../src/shared/constants/deck';

describe("Game reducer", () => {

    let initialSate;
    beforeEach(() => {
        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {}).toJS()).toEqual(initialSate)
    });
});

describe('Adding a card to the hand', () => {
    let newState;
    let cardFromDeck, index;
    beforeEach(() => {
        index = 0;
        cardFromDeck = deck[index];

        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };


        newState = reducer(initialState, {
            type: types.ADD_CARD,
            payload: {
                index: index
            }
        });
    });

    it('should handle ADD_CARD by removing a card from the available deck', () => {
        let lastCard = newState.hand[newState.hand.length -1];
        expect(_.contains(newState.deck, lastCard)).toEqual(false);
        expect(lastCard).toEqual(cardFromDeck);
    });
});

describe('Removing a card from the hand', () => {
    let newState;
    let cardFromHand, index;
    beforeEach(() => {
        index = 0;
        let hand = [deck[0]];
        cardFromHand = hand[index];

        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: hand,
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };


        newState = reducer(initialState, {
            type: types.REMOVE_CARD,
            payload: {
                index: index
            }
        });
    });

    it('should handle REMOVE_CARD by adding a card to the available deck', () => {
        let lastCard = newState.deck[newState.deck.length - 1];
        expect(_.contains(newState.hand, lastCard)).toEqual(false);
        expect(_.contains(newState.deck, lastCard)).toEqual(true);
    });
});

describe("Going to the next step of the game wizard", () => {

    let newState;
    let step = 0;

    beforeEach(() => {
        let initialState = {
            step: step,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.NEXT_STEP
        });
    });

    it('should handle NEXT_STEP by incrementing the step counter', () => {
        expect(newState.step).toEqual(step + 1);
    });
});

describe('setting opponents hand', () => {

    let newState;

    beforeEach(() => {
        let initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialSate, {
            type: types.SET_HANDS
        });
    });

    it('should handle SET_CARDS by not populating the players hand if the setting randHand is false', () => {
       expect(newState.hand.length).toEqual(0);
    });

    it('should handle SET_CARDS by populating the opponets hand with five cards', () => {
        expect(newState.opponentHand.length).toEqual(5);
    });
});

describe("setting players hand randomly", () => {

    let newState;

    beforeEach(() => {
        let initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: true,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialSate, {
            type: types.SET_HANDS
        })
    });

    it('should handle SET_CARDS by not populating the players hand with five cards', () => {
        expect(newState.hand.length).toEqual(5);
    });
});

describe("When updating the random hand setting", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "randomHand",
                isChecked: true
            }
        });

    });

    it('should handle UPDATE_SETTINGS random hand', () => {
        expect(newState.settings.randomHand).toEqual(true)
    });
});

describe("when updating the multiplayer settings", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer",
                isChecked: true
            }
        });
    });

    it('should handle UPDATE_SETTINGS multiplayer', () => {
        expect(newState.settings.multiplayer).toEqual(true)
    });
});

describe("when updating the visible hand settings", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "visibleHand",
                isChecked: true
            }
        });
    });

    it('should handle UPDATE_SETTINGS visible hand', () => {
        expect(newState.settings.visibleHand).toEqual(true)
    });
});

describe("Selecting a card", () => {

    let newState;
    let index;
    beforeEach(() => {
        index = 0;

        let initialState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.SELECT_CARD,
            payload: {
                index: index
            }
        });
    });

    it('should handle SELECT_CARD', () => {
        expect(newState.turn.selectedCard).toEqual(index);
        expect(newState.turn.canSelectPiece).toEqual(true);
    });
});

describe("Selecting a piece by the player", () => {

    let newState;
    let cardToPlace, index;
    beforeEach(() => {
        cardToPlace = deck[0];
        index = 0;

        let initialState = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [cardToPlace],
            opponentHand: [],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        });
    });

    it('should handle SELECT_PIECE', () => {
        expect(_.contains(newState.turn.validPieces, index)).toEqual(false);
        expect(_.contains(newState.hand, cardToPlace)).toEqual(false);
        expect(newState.board[index]).toEqual(cardToPlace);
    });
});

describe("Selecting a piece by the opponent", () => {

    let newState;
    let cardToPlace, index;
    beforeEach(() => {
        cardToPlace = deck[0];
        index = 0;

        let initialState = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [cardToPlace],
            handSelected: false,
            turn: {
                isOpponentTurn: true,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        });
    });

    it('should handle SELECT_PIECE', () => {
        expect(_.contains(newState.turn.validPieces, index)).toEqual(false);
        expect(_.contains(newState.opponentHand, cardToPlace)).toEqual(false);
        expect(newState.board[index]).toEqual(cardToPlace);
    });
});

describe('opponent turn in progress game', () => {

    let initialSate;

    beforeEach(() => {
        let hand = _.sample(deck, 5);
        let opponentHand = _.sample(deck, 5);
        opponentHand.forEach(card => { card.owner = 1; });

        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: hand,
            opponentHand: opponentHand,
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: [0,1,2,3,4,5,6,7,8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };
    });

    it('should handle START_AI_TURN by setting current turn to the opponent', () => {
        let newState = reducer(initialSate, {
            type: types.START_AI_TURN
        });
        expect(newState.turn.isOpponentTurn).toEqual(true);
    });

    it('should handle END_AI_TURN by setting the current turn to the player', () => {
        let newState = reducer(initialSate, {
            type: types.END_AI_TURN
        });
        expect(newState.turn.isOpponentTurn).toEqual(false);
    });
});

describe("calculating the score", () => {

    let newState;
    beforeEach(() => {
        let c0, c1, c2, c3, c4, c5, c6;
        let opponentCard = deck[7];
        opponentCard.owner = 1;

        c0 = deck[0];
        c1 = deck[1];
        c2 = deck[2];
        c3 = deck[3];
        c4 = deck[4];
        c5 = deck[5];
        c6 = deck[6];

        c0.owner = 0;
        c1.owner = 0;
        c2.owner = 0;
        c3.owner = 0;
        c4.owner = 0;
        c5.owner = 0;
        c6.owner = 0;

        let initialState = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [c0],
            opponentHand: [opponentCard],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: []
            },
            board: [c1, c2, c3, c4, c5, c6, opponentCard, null, null],
            score: {
                blue: 7,
                red: 2,
                winner: false
            }
        };

        newState = reducer(initialState, {
            type: types.CALCULATE_SCORE
        });
    });

    it('should handle CALCULATE_SCORE by counting the cards owned by each player', () => {
        expect(newState.score.blue).toEqual(7)
        expect(newState.score.red).toEqual(2)
    });
});

describe("A completed game", () => {

    let initialSate;
    let opponentCard;
    beforeEach(() => {
        opponentCard = deck[0];
        opponentCard.owner = 1;
        initialSate = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            hand: [],
            opponentHand: [deck[0]],
            handSelected: false,
            turn: {
                isOpponentTurn: false,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: []
            },
            board: _.sample(deck, 9),
            score: {
                blue: 9,
                red: 1,
                winner: false
            }
        }
    });

    it('should handle AI_TURN by doing nothing when all the pieces have cards on them', () => {
        expect(reducer(initialSate, {
            type: types.AI_TURN
        })).toEqual(initialSate)
    });
});