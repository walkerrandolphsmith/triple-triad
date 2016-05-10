import expect from 'expect';
import { ADD_CARD, addCard } from './../index';

describe('src/shared/reducers/game/actions/addCard', () => {
    describe('Given ADD_CARD action type', () => {
        let id;
        let owner;
        let expectedAction;
        beforeEach(() => {
            id = 20;
            owner = 1;
            expectedAction = {
                type: ADD_CARD,
                payload: {
                    id: id,
                    owner: owner
                }
            };
        });
        
        describe('When invoking the addCard action creator', () => {
            it('should create an action', () => {
                expect(addCard(id, owner)).toEqual(expectedAction);
            });
            
            it('should set its first parameter to the payload id field', () => {
                expect(addCard(id, owner).payload.id).toEqual(id);
            });

            it('should set its second parameter to the payload owner field', () => {
                expect(addCard(id, owner).payload.owner).toEqual(owner);
            });
        });
    });
});