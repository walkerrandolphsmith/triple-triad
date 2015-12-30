import expect from 'expect';
import {playerTakesTurn, rule, sameRule, aiTurn} from './../../../../src/shared/action-creators/';


describe('PLAYER_TAKES_TURN async action creator', () => {

    let getState, dispatch;
    let selectedPiece;
    beforeEach(() => {
        selectedPiece = 1;
        getState = () => ({});
        dispatch = expect.createSpy();
    });

   it('should be a function', () => {
       expect(playerTakesTurn(selectedPiece, false)).toBeA('function');
   });

    describe('Given it is not the opponent', () => {

        let isPlayer;
        beforeEach(() => {
            isPlayer = true;
        });

        it('should dispatch SELECT_PIECE action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SelectPiece', payload: {index: selectedPiece}})
        });

        it('should dispatch RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(rule(selectedPiece))
        });

        it('should dispatch SAME_RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(sameRule(selectedPiece))
        });

        it('should dispatch AI_TURN async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(aiTurn())
        });

    });

    describe('Given it is the opponent', () => {

        let isPlayer;
        beforeEach(() => {
            isPlayer = false;
        });

        it('should dispatch SELECT_PIECE action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith({type: 'SelectPiece', payload: {index: selectedPiece}})
        });

        it('should dispatch RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(rule(selectedPiece))
        });

        it('should dispatch SAME_RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(sameRule(selectedPiece))
        });
    });

});