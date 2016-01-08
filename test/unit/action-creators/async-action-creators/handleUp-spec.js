import expect from 'expect';
import { Map } from 'immutable';
import { handleUp, getNextSelectedCard } from './../../../../src/shared/action-creators/';

describe('HANDLE_UP async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleUp()).toBeA('function');
    });

    describe('given it is not the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "cardSelection"
                })
            });
        });

        it('should dispatch the getNextSelectedCard action', () => {
            handleUp()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(getNextSelectedCard(-1))
        });
    });

});