import expect from 'expect';
import { Map, List } from 'immutable';
import { playerTakesTurn, __RewireAPI__ } from './playerTakesTurn';

describe('PLAYER_TAKES_TURN async action creator', () => {
    let getState;
    let dispatch;
    let isPlayer;
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
        beforeEach(() => {
            isPlayer = true;
        });

        it('should dispatch PLACE_CARD action', () => {
            __RewireAPI__.__Rewire__('placeCard', () => 1);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('applyFlips', () => 2);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('selectCard', () => 3);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('selectPiece', () => 4);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4);
        });

        xit('should dispatch AI_TURN async action', () => {
            __RewireAPI__.__Rewire__('aiTurn', () => 5);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5);
        });

        xit('should dispatch GET_NEXT_SLECTED_CARD async action', () => {
            __RewireAPI__.__Rewire__('getNextSelectedCard', () => 6);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(6);
        });
    });

    describe('Given it is the opponent', () => {
        beforeEach(() => {
            isPlayer = false;
        });

        it('should dispatch PLACE_CARD action', () => {
            __RewireAPI__.__Rewire__('placeCard', () => 1);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('applyFlips', () => 2);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('selectCard', () => 3);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch RULE async action', () => {
            __RewireAPI__.__Rewire__('selectPiece', () => 4);
            playerTakesTurn(isPlayer)(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4);
        });
    });
});