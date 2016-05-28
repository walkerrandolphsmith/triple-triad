import expect from 'expect';
import { Map, List } from 'immutable';
import { handleDown, __RewireAPI__ } from './handleDown';
import PHASE from './../../../constants/phases';
import { GameRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/thunks/handleDown', () => {
    let getState;
    let dispatch;
    let game;
    beforeEach(() => {
        getState = () => ({});
        dispatch = expect.createSpy();
        game = new GameRecord({ phase: 'comePhase' });
        __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        __RewireAPI__.__Rewire__('selectNextCard', () => 1);
        __RewireAPI__.__Rewire__('selectNextPiece', () => 2);
    });

    it('should be a function', () => {
        expect(handleDown()).toBeA('function');
    });

    describe('given it is not the piece selection phase', () => {
        beforeEach(() => {
            game = new GameRecord({ phase: PHASE.CARD_SELECTION });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the selectNextCard action', () => {
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });

    describe('given it is the piece selection phase', () => {
        beforeEach(() => {
            game = new GameRecord({ phase: PHASE.PIECE_SELECTION });
            __RewireAPI__.__Rewire__('currentGameSelector', () => game);
        });

        it('should dispatch the GET_NEXT_SELECTED_PIECE action', () => {
            handleDown()(dispatch, getState);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});