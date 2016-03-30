import expect from 'expect';
import { Map } from 'immutable';
import { aiTurn, __RewireAPI__ } from './aiTurn';

describe('AI_TURN async action creator', () => {
    let dispatch;
    let getState;
    beforeEach(() => {
        dispatch = expect.createSpy();
        getState = () => ({
            game: new Map({
                selectedPiece: 1
            })
        });

        __RewireAPI__.__Rewire__('startAiTurn', () => 'startAI');
        __RewireAPI__.__Rewire__('selectCardForOpponent', () => ({ index: 1, owner: 1 }));
        __RewireAPI__.__Rewire__('selectCard', () => 'selectCard');
        __RewireAPI__.__Rewire__('getValidPiece', () => 'getValidPiece');
        __RewireAPI__.__Rewire__('selectPiece', () => 'selectPiece');
        __RewireAPI__.__Rewire__('playerTakesTurn', () => 'playerTakesTurn');
        __RewireAPI__.__Rewire__('endAiTurn', () => 'endAI');
    });

    it('should be a function', () => {
       expect(aiTurn()).toBeA('function');
    });

    it('should dispatch START_AI_TURN action', () => {
        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('startAI');
    });


    it('should dispatch SELECT_CARD action for the card selected for opponent', () => {
        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('selectCard');
    });

    describe('Given there is a valid piece', () => {
        beforeEach(() =>{
            __RewireAPI__.__Rewire__('getValidPiece', () => 1);
        });

        it('should dispatch SELECT_PIECE and PLAYER_TAKES_TURN actions', () => {
            aiTurn()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('selectPiece');
            expect(dispatch).toHaveBeenCalledWith('playerTakesTurn');
            expect(dispatch.calls.length).toEqual(5);
        });
    });

    describe('Given there is a not a valid piece', () => {
        beforeEach(() =>{
            __RewireAPI__.__Rewire__('getValidPiece', () => -1);
        });

        it('should dispatch SELECT_PIECE and PLAYER_TAKES_TURN actions', () => {
            aiTurn()(dispatch, getState);
            expect(dispatch.calls.length).toEqual(3);
        });
    });

    it('should dispatch END_AI_TURN action', () => {
        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('endAI');
    });
});