import expect from 'expect';
import { RESET_STEP } from './../../../../src/shared/constants/action-types';
import { resetStep } from './../../../../src/shared/actions/action-creators/';

describe('RESET_STEP', () => {

    it('should creat an action to trigger a reset of the current step', () => {
        const expectedAction = {
            type: RESET_STEP
        };
        expect(resetStep()).toEqual(expectedAction)
    });

});