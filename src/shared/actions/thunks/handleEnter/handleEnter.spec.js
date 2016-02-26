import expect from 'expect';
import { Map, List } from 'immutable';
import HandleEnter from './handleEnter';
import { handleEnter, __RewireAPI__ as handleEnterRewireAPI } from './handleEnter';

describe('HANDLE_ENTER async action creator', () => {

    let getState, dispatch;
    beforeEach(() => {
       getState = () => ({});
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(handleEnter()).toBeA('function');
    });

    describe('given it is settings selection phase and no setting is focused', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "settingsSelection"
                }),
                settings: new Map({
                    focused: -1
                })
            });
        });

        it('should do nothing', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled()

        });
    });

    describe('given it is settings selection phase and a setting is focused', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "settingsSelection"
                }),
                settings: new Map({
                    focused: 'randomHand'
                })
            });
        });

        it('should dispatch the UPDATE_SETTINGS action', () => {
            HandleEnter.__Rewire__('updateSettings', () => {
                return 'settings';
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('settings')

        });
    });


    describe('given it is hand selection phase and your hand is not full', () => {

        let getState;
        beforeEach(() => {
            let cardIndex = 12;
            getState = () => ({
                game: new Map({
                    phase: "handSelection",
                    selectedCard: cardIndex,
                    deck: new List([
                        new Map({id: cardIndex, owner: 0, name: 'Cloud', boardIndex: -1}),
                        new Map({id: 0, owner: 0, name: 'Tifa', boardIndex: -1})
                    ])
                })
            });
        });

        it('should dispatch the ADD_CARD action', () => {
            HandleEnter.__Rewire__('addCard', () => {
                return 'addCardToHand';
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('addCardToHand')

        });
    });

    describe('given it is hand selection phase and your hand is full and the selected card is not owned', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "handSelection",
                    selectedCard: 12,
                    deck: new List([
                        new Map({id: 0, owner: 1, name: '0', boardIndex: -1}),
                        new Map({id: 1, owner: 1, name: '1', boardIndex: -1}),
                        new Map({id: 2, owner: 1, name: '2', boardIndex: -1}),
                        new Map({id: 3, owner: 1, name: '3', boardIndex: -1}),
                        new Map({id: 4, owner: 1, name: '4', boardIndex: -1})
                    ])
                })
            });
        });

        it('should do nothing', () => {
            handleEnter()(dispatch, getState);
            expect(dispatch).toNotHaveBeenCalled()

        });
    });

    describe('given it is hand selection phase and your hand is full but the selected card is owned', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "handSelection",
                    selectedCard: 4,
                    deck: new List([
                        new Map({id: 0, owner: 1, name: '0', boardIndex: -1}),
                        new Map({id: 1, owner: 1, name: '1', boardIndex: -1}),
                        new Map({id: 2, owner: 1, name: '2', boardIndex: -1}),
                        new Map({id: 3, owner: 1, name: '3', boardIndex: -1}),
                        new Map({id: 4, owner: 1, name: '4', boardIndex: -1})
                    ])
                })
            });
        });

        it('should dispatch ADD_CARD action', () => {
            HandleEnter.__Rewire__('addCard', () => {
                return 'addCardToDeck';
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith('addCardToDeck')

        });
    });

    describe('given it is not the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "cardSelection"
                })
            });
        });

        it('should dispatch the SET_PHASE action setting the phase to pieceSelection', () => {
            HandleEnter.__Rewire__('setPhase', () => {
                return 1;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1)

        });

        it('should dispatch the getNextSelectedPiece action to set the board with a selected piece', () => {
            HandleEnter.__Rewire__('getNextSelectedPiece', () => {
                return 2;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('given it is the piece selection phase', () => {

        let getState;
        beforeEach(() => {
            getState = () => ({
                game: new Map({
                    phase: "pieceSelection",
                    selectedPiece: 0
                })
            });
        });

        it('should dispatch the PlayerTakesTurn action', () => {
            HandleEnter.__Rewire__('playerTakesTurn', () => {
                return 3;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch the SET_PHASE action setting the phase to cardSelection', () => {
            HandleEnter.__Rewire__('setPhase', () => {
                return 4;
            });
            handleEnter()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(4)
        });
    });

});