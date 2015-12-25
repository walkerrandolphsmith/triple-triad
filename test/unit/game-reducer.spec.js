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
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

    it('should handle ADD_CARD by removing a card from the available deck', () => {

        let newState = reducer(initialSate, {
            type: types.ADD_CARD,
            payload: {
                index: 0
            }
        });

        expect(initialSate.availableDeck.length - 1).toEqual(newState.availableDeck.length);
        expect(initialSate.hand.length + 1).toEqual(newState.hand.length);
    });

    it('should handle REMOVE_CARD by adding a card to the available deck', () => {

        let state = _.cloneDeep(initialSate);
        state.hand = [deck[0]];

        let newState = reducer(state, {
            type: types.REMOVE_CARD,
            payload: {
                index: 0
            }
        });

        expect(state.availableDeck.length + 1).toEqual(newState.availableDeck.length);
        expect(state.hand.length - 1).toEqual(newState.hand.length);
    });
});

describe("Going to the next step of the game wizard", () => {

    let initialSate;
    let expectedState;
    beforeEach(() => {
        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 1,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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
    });

    it('should return the increment the step counter', () => {
        expect(reducer(initialSate, {
            type: types.NEXT_STEP
        })).toEqual(expectedState)
    });
});

describe("handle UPDATE_SETTINGS random hand", () => {

    let initialSate;
    let expectedState;
    beforeEach(() => {
        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: true,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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
    });

    it('should handle UPDATE_SETTINGS random hand', () => {
        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "randomHand",
                isChecked: true
            }
        })).toEqual(expectedState)
    });
});

describe("handle UPDATE_SETTINGS multiplayer", () => {

    let initialSate;
    let expectedState;
    beforeEach(() => {
        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: true,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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
    });

    it('should handle UPDATE_SETTINGS multiplayer', () => {
        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer",
                isChecked: true
            }
        })).toEqual(expectedState)
    });
});

describe("handle UPDATE_SETTINGS visible hand", () => {

    let initialSate;
    let expectedState;
    beforeEach(() => {
        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: true
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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
    });

    it('should handle UPDATE_SETTINGS visible hand', () => {
        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "visibleHand",
                isChecked: true
            }
        })).toEqual(expectedState)
    });
});

describe("Selecting a card", () => {

    let initialSate;
    let expectedState;
    let index;
    beforeEach(() => {
        index = 0;

        initialSate = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
                selectedCard: index, //index of hand
                canSelectPiece: true,
                validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [null, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };
    });

    it('should handle SELECT_CARD', () => {
        expect(reducer(initialSate, {
            type: types.SELECT_CARD,
            payload: {
                index: index
            }
        })).toEqual(expectedState)
    });
});

describe("Selecting a piece", () => {

    let initialSate;
    let expectedState;
    let index;
    let cardToPlace;

    beforeEach(() => {
        cardToPlace = deck[0];
        index = 0;

        initialSate = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [cardToPlace],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        expectedState = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [],
            opponentHand: [],
            handSelected: false,
            turn: {
                currentPlayer: 0,
                selectedCard: -1,
                canSelectPiece: false,
                validPieces: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            board: [cardToPlace, null, null, null, null, null, null, null, null],
            score: {
                blue: 5,
                red: 5,
                winner: false
            }
        };
    });

    it('should handle SELECT_PIECE', () => {
        expect(reducer(initialSate, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        })).toEqual(expectedState)
    });
});

describe("calculating the score", () => {

    let initialSate;
    let opponentCard
    beforeEach(() => {
        opponentCard = deck[7];
        opponentCard.owner = 1;

        initialSate = {
            step: 2,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            },
            availableDeck: deck,
            hand: [deck[0]],
            opponentHand: [opponentCard],
            handSelected: false,
            turn: {
                currentPlayer: 0,
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: []
            },
            board: [deck[1], deck[2], deck[3], deck[4], deck[5], deck[6], opponentCard, null, null],
            score: {
                blue: 7,
                red: 2,
                winner: false
            }
        }
    });

    it('should handle CALCULATE_SCORE by counting the cards owner by each player', () => {

        let state = _.cloneDeep(initialSate);

        expect(reducer(initialSate, {
            type: types.CALCULATE_SCORE
        })).toEqual(state)
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
            availableDeck: deck,
            hand: [],
            opponentHand: [deck[0]],
            handSelected: false,
            turn: {
                currentPlayer: 0,
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

        let state = _.cloneDeep(initialSate);

        expect(reducer(initialSate, {
            type: types.AI_TURN
        })).toEqual(state)
    });
});