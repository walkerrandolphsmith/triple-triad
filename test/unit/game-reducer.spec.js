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

    it('should handle ADD_CARD by removing a card from the available deck', () => {

        let newState = reducer(initialSate, {
            type: types.ADD_CARD,
            payload: {
                index: 0
            }
        });

        expect(initialSate.deck.length - 1).toEqual(newState.deck.length);
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

        expect(state.deck.length + 1).toEqual(newState.deck.length);
        expect(state.hand.length - 1).toEqual(newState.hand.length);
    });
});

describe("Going to the next step of the game wizard", () => {

    let initialSate, newState;
    let step = 0;

    beforeEach(() => {
        initialSate = {
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
    });

    it('should handle NEXT_STEP by incrementing the step counter', () => {

        let newState = reducer(initialSate, {
            type: types.NEXT_STEP
        });

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

        expectedState = {
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

describe("when updating the multiplayer settings", () => {

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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: true,
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

describe("when updating the visible hand settings", () => {

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

        expectedState = {
            step: 0,
            deck: deck,
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: true
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

        expectedState = {
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

describe("Selecting a piece by the player", () => {

    let initialSate, newState;

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
    });

    it('should handle SELECT_PIECE', () => {

        newState = reducer(initialSate, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        });

        expect(_.contains(newState.turn.validPieces, index)).toEqual(false);
        expect(_.contains(newState.hand, cardToPlace)).toEqual(false);
        expect(newState.board[index]).toEqual(cardToPlace);
    });
});

describe("Selecting a piece by the opponent", () => {

    let initialSate, newState;

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
    });

    it('should handle SELECT_PIECE', () => {

        newState = reducer(initialSate, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        });

        expect(_.contains(newState.turn.validPieces, index)).toEqual(false);
        expect(_.contains(newState.opponentHand, cardToPlace)).toEqual(false);
        expect(newState.board[index]).toEqual(cardToPlace);
    });
});

describe('opponent turn in progress game', () => {

    let initialSate;
    let hand;
    let opponentHand;

    beforeEach(() => {
        hand = _.sample(deck, 5);
        opponentHand = _.sample(deck, 5);
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

    let initialSate;
    let opponentCard;
    let c0, c1, c2, c3, c4, c5, c6;

    beforeEach(() => {
        opponentCard = deck[7];
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

        initialSate = {
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
                selectedCard: -1, //index of hand
                canSelectPiece: false,
                validPieces: []
            },
            board: [c1, c2, c3, c4, c5, c6, opponentCard, null, null],
            score: {
                blue: 7,
                red: 2,
                winner: false
            }
        }
    });

    it('should handle CALCULATE_SCORE by counting the cards owned by each player', () => {

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

        let state = _.cloneDeep(initialSate);

        expect(reducer(initialSate, {
            type: types.AI_TURN
        })).toEqual(state)
    });
});