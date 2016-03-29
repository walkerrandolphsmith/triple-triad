import expect from 'expect';
import { Map } from 'immutable';
import { handleLeft, __RewireAPI__ } from './handleLeft';

describe('Given getState, dispatch', () => {
    let getState;
    let dispatch;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('getNextCardForHand', () => 1);
        __RewireAPI__.__Rewire__('getNextSelectedPiece', () => 2);
    });

    it('should be a function', () => {
        expect(handleLeft()).toBeA('function');
    });

    describe('When the getState returns state containing a game with phase handSelection', () => {
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: 'handSelection'
                })
            });
        });

        it('should dispatch the result of getNextCardForHand', () => {
            handleLeft()(dispatch, getState);
            expect(dispatch).toHaveBeenCalled(1);
        });
    });

    describe('When the getState returns state containing a game with phase pieceSelection', () => {
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: 'pieceSelection'
                })
            });
        });

        it('should dispatch the result of getNextSelectedPiece', () => {
            handleLeft()(dispatch, getState);
            expect(dispatch).toHaveBeenCalled(2);
        });
    });
});