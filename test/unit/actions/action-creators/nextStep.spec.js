import expect from 'expect';
import { NEXT_STEP } from './../../../../src/shared/constants/action-types';
import { nextStep } from './../../../../src/shared/actions/action-creators/';

describe('NEXT_STEP', () => {

    it('should create an action to trigger the next step of the wizard', () => {
        const expectedAction = {
            type: NEXT_STEP
        };
        expect(nextStep()).toEqual(expectedAction)
    });

});