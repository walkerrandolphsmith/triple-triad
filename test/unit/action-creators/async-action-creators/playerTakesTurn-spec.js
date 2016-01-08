import expect from 'expect';
import {playerTakesTurn, placeCard, applyFlips, aiTurn, getNextSelectedCard} from './../../../../src/shared/action-creators/';


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

        it('should dispatch PLACE_CARD action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(placeCard())
        });

        it('should dispatch RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(applyFlips(selectedPiece))
        });

        it('should dispatch AI_TURN async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(aiTurn())
        });

        it('should dispatch GET_NEXT_SLECTED_CARD async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(getNextSelectedCard())
        });
    });

    describe('Given it is the opponent', () => {

        let isPlayer;
        beforeEach(() => {
            isPlayer = false;
        });

        it('should dispatch PLACE_CARD action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(placeCard())
        });

        it('should dispatch RULE async action', () => {
            playerTakesTurn(selectedPiece, isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(applyFlips(selectedPiece))
        });
    });

});