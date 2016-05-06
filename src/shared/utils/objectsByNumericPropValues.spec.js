import expect from 'expect';
import { sort } from './objectsByNumericPropValues';

describe('src/shared/actions/utils/sort/objectsByNumericPropValue', () => {
   describe('Given a collection of objects that share a common numeric property', () => {
       let collection;
       let elementOne;
       let elementTwo;
       let elementThree;
       beforeEach(() => {
           elementOne = { index: 5 };
           elementTwo = { index: 1 };
           elementThree = { index: 9 };

           collection = [elementOne, elementTwo, elementThree];
       });
       describe('When sorting the collection on its numeric property', () => {
          it('should return the collection sorted in ascending numeric property value', () => {
              expect(sort(collection)).toEqual([elementTwo, elementOne, elementThree]);
          });
       });
   });

    describe('Given a sorted collection of objects that share a common numeric property', () => {
        let collection;
        let elementOne;
        let elementTwo;
        let elementThree;
        beforeEach(() => {
            elementOne = { index: 1 };
            elementTwo = { index: 2 };
            elementThree = { index: 3 };

            collection = [elementOne, elementTwo, elementThree];
        });
        describe('When sorting the collection on its numeric property', () => {
            it('should return the collection sorted in ascending numeric property value', () => {
                expect(sort(collection)).toEqual([elementOne, elementTwo, elementThree]);
            });
        });
    });
});