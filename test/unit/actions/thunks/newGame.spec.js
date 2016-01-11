import expect from 'expect';
import { newGame } from './../../../../src/shared/actions/thunks/newGame';

describe('NEW_GAME async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
       dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(newGame()).toBeA('function');
    });


    it('should dispatch RESET_STEP action', () => {
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({type: 'ResetStep' })
    });


    it('should dispatch RESET_SETTINGS action', () => {
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({type: 'ResetSettings' })
    });


    it('should dispatch RESET_GAME action', () => {
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({type: 'ResetGame' })
    });

});