import expect from 'expect';
import { Map } from 'immutable';
import { handleDown } from './../../../../src/shared/actions/thunks/handleDown';
import { getNextSelectedCard } from './../../../../src/shared/actions/thunks/getNextSelectedCard';

describe('HANDLE_DOWN async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleDown()).toBeA('function');
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
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(getNextSelectedCard(1))
        });
    });

});