import expect from 'expect';
import { isGreaterThanMinLength, isLessThanMaxLength, isInteger } from './../../../src/shared/utils/formValidation';

describe("Form validation utilities", () => {

    describe("Given a form field value that is empty", () => {

        let value;
        beforeEach(() => {
            value = '';
        });

        it('the minimum length requirement is not met', () => {
            expect(isGreaterThanMinLength(5)(value)).toEqual(false)
        });

        it('the maximum length requirement is not met', () => {
            expect(isLessThanMaxLength(5)(value)).toEqual(false)
        });

        it('the integer requirement is not met', () => {
            expect(isInteger(value)).toEqual(false)
        });
    });

    describe("Given a form field value", () => {

        let minLength, maxLength, value;
        beforeEach(() => {
            value = 'walker';
        });

        describe('A minimum length requirement less than the number of characters in value', () => {
            beforeEach(() => {
                minLength = 5;
            });

            it('the minimum length requirement is met', () => {
                expect(isGreaterThanMinLength(minLength)(value)).toEqual(true)
            });
        });

        describe('A minimum length requirement greater than the number of characters in value', () => {
            beforeEach(() => {
                minLength = 10;
            });

            it('the minimum length requirement is not met', () => {
                expect(isGreaterThanMinLength(minLength)(value)).toEqual(false)
            });
        });

        describe('A maximum length requirement less than the number of characters in value', () => {
            beforeEach(() => {
                maxLength = 3;
            });

            it('the maximum length requirement is not met', () => {
                expect(isLessThanMaxLength(maxLength)(value)).toEqual(false)
            });
        });

        describe('A maximum length requirement greater the number of characters in value', () => {
            beforeEach(() => {
                maxLength = 7;
            });

            it('the maximum length requirement is met', () => {
                expect(isLessThanMaxLength(maxLength)(value)).toEqual(true)
            });
        });
    });

    describe("Given a form field value that is a valid number", () => {
        it('the integer requirement is met', () => {
            expect(isInteger('7')).toEqual(true)
            expect(isInteger(7)).toEqual(true)
        });
    });

    describe("Given a form field value that is an invalid number", () => {
        it('the integer requirement is not met', () => {
            expect(isInteger('asdf7')).toEqual(false)
            expect(isInteger({})).toEqual(false)
            expect(isInteger([])).toEqual(false)
        });
    });
});