import expect from 'expect';
import { Map, List } from 'immutable';
import { playerTakesTurn, __RewireAPI__ } from './playerTakesTurn';

describe('src/shared/actions/thunks/playerTakesTurn', () => {
    let getState;
    let dispatch;
    let isPlayer;
    let game;
    beforeEach(() => {
        game = new Map({
            deck: new List([])
        });
        __RewireAPI__.__Rewire__('getCurrentGame', () => game);
        getState = () => ({});
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
    });
});