import expect from 'expect';
import { Map } from 'immutable';
import AiTurn from './aiTurn';
import { aiTurn, __RewireAPI__ as aiTurnRewireAPI } from './aiTurn';

describe('AI_TURN async action creator', () => {

    let dispatch, getState;
    beforeEach(() => {
       dispatch = expect.createSpy();
       getState = () => ({
           game: new Map({
               selectedPiece: 1
           })
       });

        AiTurn.__Rewire__('startAiTurn', () => {
            return 'startAI';
        });

        AiTurn.__Rewire__('selectCardForOpponent', () => {
            return {index: 1, owner: 1};
        });

        AiTurn.__Rewire__('selectCard', () => {
            return 'selectCard';
        });

        AiTurn.__Rewire__('getValidPiece', () => {
            return 'getValidPiece';
        });

        AiTurn.__Rewire__('selectPiece', () => {
            return 'selectPiece';
        });

        AiTurn.__Rewire__('playerTakesTurn', () => {
            return 'playerTakesTurn';
        });

        AiTurn.__Rewire__('endAiTurn', () => {
            return 'endAI';
        });

    });

    it('should be a function', () => {
       expect(aiTurn()).toBeA('function');
    });

    it('should dispatch START_AI_TURN action', () => {


        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('startAI')
    });


    it('should dispatch SELECT_CARD action for the card selected for opponent', () => {


        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('selectCard')
    });

    describe('Given there is a valid piece', () => {

        beforeEach(() =>{
            AiTurn.__Rewire__('getValidPiece', () => {
                return 1;
            });

            AiTurn.__Rewire__('playerTakesTurn', () => {
                return 'playerTakesTurn';
            });

            AiTurn.__Rewire__('endAiTurn', () => {
                return 'endAI';
            });
        });

        it('should dispatch SELECT_PIECE and PLAYER_TAKES_TURN actions', () => {

            aiTurn()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('selectPiece');
            expect(dispatch).toHaveBeenCalledWith('playerTakesTurn');
            expect(dispatch.calls.length).toEqual(5)
        });
    });

    describe('Given there is a not a valid piece', () => {

        beforeEach(() =>{
            AiTurn.__Rewire__('getValidPiece', () => {
                return -1;
            });

            AiTurn.__Rewire__('playerTakesTurn', () => {
                return 'playerTakesTurn';
            });

            AiTurn.__Rewire__('endAiTurn', () => {
                return 'endAI';
            });
        });

        it('should dispatch SELECT_PIECE and PLAYER_TAKES_TURN actions', () => {

            aiTurn()(dispatch, getState);
            expect(dispatch.calls.length).toEqual(3)
        });
    });

    it('should dispatch END_AI_TURN action', () => {
        aiTurn()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith('endAI')
    });



});