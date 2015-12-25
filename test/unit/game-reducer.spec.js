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

    it('should handle UPDATE_SETTINGS random hand', () => {

        let state = _.cloneDeep(initialSate);

        state.settings.randomHand = true;

        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "randomHand",
                isChecked: true
            }
        })).toEqual(state)
    });

    it('should handle UPDATE_SETTINGS multiplayer', () => {

        let state = _.cloneDeep(initialSate);

        state.settings.multiplayer = true;

        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer",
                isChecked: true
            }
        })).toEqual(state)
    });

    it('should handle UPDATE_SETTINGS opponent hand is visible', () => {

        let state = _.cloneDeep(initialSate);

        state.settings.visibleHand = true;

        expect(reducer(initialSate, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "visibleHand",
                isChecked: true
            }
        })).toEqual(state)
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

    it('should handle SELECT_CARD', () => {
        let index = 0;

        let state = _.cloneDeep(initialSate);

        state.turn.selectedCard = index;
        state.turn.canSelectPiece = true;

        expect(reducer(initialSate, {
            type: types.SELECT_CARD,
            payload: {
                index: index
            }
        })).toEqual(state)
    });

    it('should handle SELECT_PIECE', () => {
        let index = 0;

        let cardToPlace = deck[0];
        cardToPlace.owner = 0;

        initialSate.hand = [cardToPlace];

        let state = _.cloneDeep(initialSate);

        state.turn.validPieces = [1,2,3,4,5,6,7,8];
        state.turn.canSelectPiece = false;
        state.hand = [];
        state.selectedCard = -1;
        state.board[index]  = cardToPlace;

        expect(reducer(initialSate, {
            type: types.SELECT_PIECE,
            payload: {
                index: index
            }
        })).toEqual(state)
    });
});

describe("A completed game", () => {

    let initialSate;
    beforeEach(() => {

        let cards = [];
        for(var i = 0; i < 9; i++){
            let card = _.assign(deck[i], { owner: 0 });
            cards.push(card);
        }

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
            board: cards,
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