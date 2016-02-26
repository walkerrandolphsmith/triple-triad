import expect from 'expect';
import { Map, List } from 'immutable';
import PlayerTakesTurn from './playerTakesTurn';
import { playerTakesTurn, __RewireAPI__ as playerTakesTurnRewireAPI } from './playerTakesTurn';

describe('PLAYER_TAKES_TURN async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
        getState = () => ({
            game: new Map({
               deck: new List([])
            })
        });
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
            PlayerTakesTurn.__Rewire__('placeCard', () => {
                return 1;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('applyFlips', () => {
                return 2;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectCard', () => {
                return 3;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectPiece', () => {
                return 4;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });

        xit('should dispatch AI_TURN async action', () => {
            PlayerTakesTurn.__Rewire__('aiTurn', () => {
                return 5;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5)
        });

        xit('should dispatch GET_NEXT_SLECTED_CARD async action', () => {
            PlayerTakesTurn.__Rewire__('getNextSelectedCard', () => {
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
            PlayerTakesTurn.__Rewire__('placeCard', () => {
                return 1;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('applyFlips', () => {
                return 2;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectCard', () => {
                return 3;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3)
        });

        it('should dispatch RULE async action', () => {
            PlayerTakesTurn.__Rewire__('selectPiece', () => {
                return 4;
            });
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });

    });

});