import expect from 'expect';
import { getScore } from './getScore';

describe('/src/shared/utils/getScore', () => {
    describe('Given two variables red and blue', () => {
        let red;
        let blue;
        beforeEach(() => {
            blue = 'blue';
            red = 'red';
        });

        describe('When gettting the score', () => {
            let actual;
            beforeEach(() => {
               actual = getScore(blue, red);
            });

            it('should contain a property blue with the value of first argument', () => {
                expect(actual.blue).toEqual(blue);
            });

            it('should contain a property red with the value of second argument', () => {
                expect(actual.red).toEqual(red);
            });
        });
    });
});