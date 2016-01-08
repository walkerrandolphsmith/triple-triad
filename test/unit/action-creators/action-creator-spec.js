import expect from 'expect';
import * as types from '../../../src/shared/constants/action-types';
import * as actions from './../../../src/shared/action-creators/';

describe('actions', () => {
    it('should create an action to trigger the next step of the wizard', () => {
        const expectedAction = {
            type: types.NEXT_STEP
        };
        expect(actions.nextStep()).toEqual(expectedAction)
    });

    it('should creat an action to trigger a reset of the current step', () => {
        const expectedAction = {
            type: types.RESET_STEP
        };
        expect(actions.resetStep()).toEqual(expectedAction)
    });

    it('should create an action to trigger a rest of the board', () => {
        const expectedAction = {
            type: types.RESET_GAME
        };
        expect(actions.resetGame()).toEqual(expectedAction)
    });

    it('should create an action to trigger a rest of the settings', () => {
        const expectedAction = {
            type: types.RESET_SETTINGS
        };
        expect(actions.resetSettings()).toEqual(expectedAction)
    });

    it('should create an action to add a card to a owners hand', () => {
        const expectedAction = {
            type: types.ADD_CARD,
            payload: {
                id: 0,
                owner: 2
            }
        };
        expect(actions.addCard(0, 2)).toEqual(expectedAction)
    });

    it('should create an action to add a card to a players hand if there is no owner', () => {
        const expectedAction = {
            type: types.ADD_CARD,
            payload: {
                id: 0,
                owner: undefined
            }
        };
        expect(actions.addCard(0)).toEqual(expectedAction)
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
                id: 0
            }
        };
        expect(actions.selectCard(0)).toEqual(expectedAction)
    });

    it('should create an action to select a piece on the board', () => {
        const expectedAction = {
            type: types.SELECT_PIECE,
            payload: {
                index: 0
            }
        };
        expect(actions.selectPiece(0)).toEqual(expectedAction)
    });

    it('should create an action to update the board when a card is placed', () => {
        const expectedAction = {
            type: types.UPDATE_BOARD,
            payload: {
                index: 0,
                owner: 0
            }
        };
        expect(actions.updateBoard(0, 0)).toEqual(expectedAction)
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