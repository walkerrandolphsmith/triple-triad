import expect from 'expect';
import * as actions from '../../src/shared/actions/step';
import * as types from '../../src/shared/constants/action-types';

describe('actions', () => {
    it('should create an action to trigger the next step of the wizard', () => {
        const expectedAction = {
            type: types.NEXTSTEP
        };
        expect(actions.nextStep()).toEqual(expectedAction)
    });

    it('should create an action to add a card to a players hand', () => {
        const expectedAction = {
            type: types.ADDCARD,
            payload: {
                index: 0
            }
        };
        expect(actions.addCard(0)).toEqual(expectedAction)
    });

    it('should create an action to remove a card to a players hand', () => {
        const expectedAction = {
            type: types.REMOVECARD,
            payload: {
                index: 0
            }
        };
        expect(actions.removeCard(0)).toEqual(expectedAction)
    });
});