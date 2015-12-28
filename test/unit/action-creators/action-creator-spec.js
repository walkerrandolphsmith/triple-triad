import expect from 'expect';
import * as actions from './../../../src/shared/action-creators/step';
import * as types from '../../../src/shared/constants/action-types';

describe('actions', () => {
    it('should create an action to trigger the next step of the wizard', () => {
        const expectedAction = {
            type: types.NEXT_STEP
        };
        expect(actions.nextStep()).toEqual(expectedAction)
    });

    it('should create an action to set the hands of the players', () => {
       const expectedAction = {
           type: types.SET_HANDS,
           payload: {
               randomHand: true
           }
       };
        expect(actions.setHands(true)).toEqual(expectedAction);
    });

    it('should create an action to add a card to a players hand', () => {
        const expectedAction = {
            type: types.ADD_CARD,
            payload: {
                index: 0
            }
        };
        expect(actions.addCard(0)).toEqual(expectedAction)
    });

    it('should create an action to remove a card to a players hand', () => {
        const expectedAction = {
            type: types.REMOVE_CARD,
            payload: {
                index: 0
            }
        };
        expect(actions.removeCard(0)).toEqual(expectedAction)
    });

    it('should create an action to update a game setting', () => {
        const expectedAction = {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer",
                isChecked: true
            }
        };
        expect(actions.updateSettings("multiplayer", true)).toEqual(expectedAction)
    });

    it('should create an action to select a card', () => {
        const expectedAction = {
            type: types.SELECT_CARD,
            payload: {
                index: 0
            }
        };
        expect(actions.selectCard(0)).toEqual(expectedAction)
    });

    it('should create an action to select a piece on the board', () => {
        const expectedAction = {
            type: types.SELECT_PIECE,
            payload: {
                index: 0,
                isPlayer: true
            }
        };
        expect(actions.selectPiece(0, true)).toEqual(expectedAction)
    });

    it('should create an action to apply the rules to flip cards', () => {
        const expectedAction = {
            type: types.APPLY_RULES,
            payload: {
                index: 0
            }
        };
        expect(actions.applyRules(0)).toEqual(expectedAction)
    });

    it('should create an action to initiate the AI oppoents turn', () => {
       const expectedAction = {
           type: types.START_AI_TURN
       };
       expect(actions.startAiTurn()).toEqual(expectedAction);
    });

    it('should create an action to end the AI oppoents turn', () => {
        const expectedAction = {
            type: types.END_AI_TURN
        };
        expect(actions.endAiTurn()).toEqual(expectedAction);
    });
});