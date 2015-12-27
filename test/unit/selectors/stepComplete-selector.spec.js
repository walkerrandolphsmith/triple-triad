import expect from 'expect';
import { stepCompleteSelectorCreator } from './../../../src/shared/selectors/';
import deck from './../../../src/shared/constants/deck';
import _ from 'lodash';

describe("stepComplete selector", () => {

    describe("stepComplete selector of a full hand", () => {
        it('should be true', () => {
            expect(stepCompleteSelectorCreator({
                hand: [deck[0], deck[1], deck[2], deck[3], deck[4]]
            })).toEqual(true)
        });
    });

    describe("stepComplete selector of a empty hand", () => {
        it('should be false', () => {
            expect(stepCompleteSelectorCreator({
                hand: []
            })).toEqual(false)
        });
    });

    describe("stepComplete selector of a partially selected hand", () => {
        it('should be false', () => {
            expect(stepCompleteSelectorCreator({
                hand: [deck[0], deck[1], deck[2]]
            })).toEqual(false)
        });
    });

});