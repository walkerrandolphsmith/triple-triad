import expect from 'expect';
import { Map, List } from 'immutable';
import { handleEnter, __RewireAPI__ } from './handleEnter';
import PHASE from './../../../constants/phases';
import { GameRecord, CardRecord } from './../../../constants/records';

describe('src/shared/reducers/game/thunks/handleEnter', () => {
    let getState;
    let dispatch;
    let game;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({}));
        __RewireAPI__.__Rewire__('setPhase', () => 1);
        __RewireAPI__.__Rewire__('selectNextPiece', () => 2);
        __RewireAPI__.__Rewire__('completeTurn', () => 3);
        __RewireAPI__.__Rewire__('addCard', () => 5);
        __RewireAPI__.__Rewire__('updateSetting', () => 6);
    });

    it('should be a function', () => {
        expect(handleEnter()).toBeA('function');
    });

    describe('given it is settings selection phase and no setting is focused', () => {
        beforeEach(() => {
            game = new GameRecord({ phase: PHASE.SETTINGS_SELECTION });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            getState = () => ({
                settings: new Map({
                    focused: -1
                })
            });
        });

        it('should do nothing', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('given it is settings selection phase and a setting is focused', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('currentGameSelector', () => new GameRecord({ phase: PHASE.SETTINGS_SELECTION }));
            getState = () => ({
                settings: new Map({
                    focused: 'randomHand'
                })
            });
        });

        it('should dispatch the UPDATE_SETTINGS action', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(6);
        });
    });


    describe('given it is hand selection phase and your hand is not full', () => {
        beforeEach(() => {
            let cardIndex = 12;
            game = new GameRecord({
                phase: PHASE.HAND_SELECTION,
                selectedCard: cardIndex,
                deck: new List([
                    new CardRecord({ id: cardIndex, owner: 0, name: 'Cloud', boardIndex: -1 }),
                    new CardRecord({ id: 0, owner: 0, name: 'Tifa', boardIndex: -1 })
                ])
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            getState = () => ({});
        });

        it('should dispatch the ADD_CARD action', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });

    describe('given it is hand selection phase and your hand is full and the selected card is not owned', () => {
        beforeEach(() => {
            game = new GameRecord({
                phase: PHASE.HAND_SELECTION,
                selectedCard: 12,
                deck: new List([
                    new CardRecord({ id: 0, owner: 1, name: '0', boardIndex: -1 }),
                    new CardRecord({ id: 1, owner: 1, name: '1', boardIndex: -1 }),
                    new CardRecord({ id: 2, owner: 1, name: '2', boardIndex: -1 }),
                    new CardRecord({ id: 3, owner: 1, name: '3', boardIndex: -1 }),
                    new CardRecord({ id: 4, owner: 1, name: '4', boardIndex: -1 })
                ])
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            getState = () => ({});
        });

        it('should do nothing', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled();
        });
    });

    describe('given it is hand selection phase and your hand is full but the selected card is owned', () => {
        beforeEach(() => {
            game = new GameRecord({
                phase: PHASE.HAND_SELECTION,
                selectedCard: 4,
                deck: new List([
                    new CardRecord({ id: 0, owner: 1, name: '0', boardIndex: -1 }),
                    new CardRecord({ id: 1, owner: 1, name: '1', boardIndex: -1 }),
                    new CardRecord({ id: 2, owner: 1, name: '2', boardIndex: -1 }),
                    new CardRecord({ id: 3, owner: 1, name: '3', boardIndex: -1 }),
                    new CardRecord({ id: 4, owner: 1, name: '4', boardIndex: -1 })
                ])
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            getState = () => ({});
        });

        it('should dispatch ADD_CARD action', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });

    describe('given it is not the piece selection phase', () => {
        beforeEach(() => {
            game = new GameRecord({
                phase: PHASE.CARD_SELECTION
            });
            getState = () => ({});
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the SET_PHASE action setting the phase to pieceSelection', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch the selectNextPiece action to set the board with a selected piece', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('given it is the piece selection phase', () => {
        beforeEach(() => {
            game = new GameRecord({
                phase: PHASE.PIECE_SELECTION,
                selectedPiece: 0
            });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
            getState = () => ({});
        });

        it('should dispatch the completeTurn action', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});