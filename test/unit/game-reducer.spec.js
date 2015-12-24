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
            type: types.UPDATESETTINGS,
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
            type: types.UPDATESETTINGS,
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
            type: types.UPDATESETTINGS,
            payload: {
                setting: "visibleHand",
                isChecked: true
            }
        })).toEqual(state)
    });

    it('should handle ADD_CARD by removing a card from the available deck', () => {

        let newState = reducer(initialSate, {
            type: types.ADDCARD,
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
            type: types.REMOVECARD,
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
            type: types.SELECTCARD,
            payload: {
                index: index
            }
        })).toEqual(state)
    });

});