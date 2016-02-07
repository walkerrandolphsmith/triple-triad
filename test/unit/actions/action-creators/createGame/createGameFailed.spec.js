import expect from 'expect';
import { CREATE_FAILED } from './../../../../../src/shared/constants/actionTypes';
import { createGameFailed } from './../../../../../src/shared/actions/action-creators';

describe('CREATE_FAILED', () => {

    it('should create an action to indicate creating a game failed', () => {
        const expectedAction = {
            type: CREATE_FAILED
        };
        expect(createGameFailed()).toEqual(expectedAction);
    });

});