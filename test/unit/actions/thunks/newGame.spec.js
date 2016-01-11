import expect from 'expect';
import NewGame from './../../../../src/shared/actions/thunks/newGame';
import { newGame, __RewireAPI__ as newGameRewireAPI } from './../../../../src/shared/actions/thunks/newGame';

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
        NewGame.__Rewire__('resetStep', function(){
            return 'resetStepAction';
        });
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('resetStepAction')
    });


    it('should dispatch RESET_SETTINGS action', () => {
        NewGame.__Rewire__('resetSettings', function(){
            return 'resetSettingsAction';
        });
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('resetSettingsAction')
    });


    it('should dispatch RESET_GAME action', () => {
        NewGame.__Rewire__('resetGame', function(){
            return 'resetGameAction';
        });
        newGame()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('resetGameAction')
    });

});