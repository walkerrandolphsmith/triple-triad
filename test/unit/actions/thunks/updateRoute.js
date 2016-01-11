import expect from 'expect';
import { Map } from 'immutable';
import UpdateRoute from './../../../../src/shared/actions/thunks/updateRoute';
import { updateRoute, __RewireAPI__ as updateRouteRewireAPI } from './../../../../src/shared/actions/thunks/updateRoute';

describe('UPDATE_ROUTE async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
        getState = () => ({
            settings: new Map({
                randomHand: false
            })
        });
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(updateRoute()).toBeA('function');
    });

    it('should dispatch pushPath action', () => {
        UpdateRoute.__Rewire__('pushPath', function(){
            return 0;
        });
        updateRoute('round')(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(0)
    });

    describe('given the game is over and you play again', () => {
        let currentRoute = "game-over";

        it('should dispatch newGame action', () => {
            UpdateRoute.__Rewire__('newGame', function(){
                return 1;
            });
            updateRoute(currentRoute)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });
    });

});