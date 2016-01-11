import expect from 'expect';
import PlayerTakesTurn from './../../../../src/shared/actions/thunks/playerTakesTurn';
import { playerTakesTurn, __RewireAPI__ as playerTakesTurnRewireAPI } from './../../../../src/shared/actions/thunks/playerTakesTurn';

describe('PLAYER_TAKES_TURN async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
    });

   it('should be a function', () => {
       expect(playerTakesTurn(false)).toBeA('function');
   });

    describe('Given it is not the opponent', () => {

        let isPlayer;
        beforeEach(() => {
            isPlayer = true;
        });

        it('should dispatch PLACE_CARD action', () => {
            PlayerTakesTurn.__Rewire__('placeCard', function(){
                return 1;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('applyFlips', function(){
                return 2;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectCard', function(){
                return 3;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectPiece', function(){
                return 4;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });

        it('should dispatch AI_TURN async action', () => {
            PlayerTakesTurn.__Rewire__('aiTurn', function(){
                return 5;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5)
        });

        it('should dispatch GET_NEXT_SLECTED_CARD async action', () => {
            PlayerTakesTurn.__Rewire__('getNextSelectedCard', function(){
                return 6;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(6)
        });
    });

    describe('Given it is the opponent', () => {

        let isPlayer;
        beforeEach(() => {
            isPlayer = false;
        });

        it('should dispatch PLACE_CARD action', () => {
            PlayerTakesTurn.__Rewire__('placeCard', function(){
                return 1;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('applyFlips', function(){
                return 2;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectCard', function(){
                return 3;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectPiece', function(){
                return 4;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });

    });

});