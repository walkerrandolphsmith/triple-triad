import expect from 'expect';
import { Map, List } from 'immutable';
import { setHand, __RewireAPI__ } from './setHand';

describe('src/shared/reducers/game/thunks/setHand', () => {
    let dispatch;
    let getState;
    let player;
    beforeEach(() => {
        player = 1;
        dispatch = expect.createSpy();
        getState = () => ({});
    });

    it('should be a function', () => {
        expect(setHand()).toBeA('function');
    });

    it('should dispatch ADD_CARD action for each card in hand', () => {
        __RewireAPI__.__Rewire__('currentGameSelector', () => 'game');
        __RewireAPI__.__Rewire__('getRandomHand', () => {
            return new List([
                new Map({ id: 1, name: '1', owner: 1, boardIndex: -1 }),
                new Map({ id: 2, name: '2', owner: 1, boardIndex: -1 }),
                new Map({ id: 3, name: '3', owner: 1, boardIndex: -1 }),
                new Map({ id: 4, name: '4', owner: 1, boardIndex: -1 }),
                new Map({ id: 5, name: '5', owner: 1, boardIndex: -1 })
            ]);
        });
        __RewireAPI__.__Rewire__('addCard', () => 1);
        setHand(player)(dispatch, getState);
        expect(dispatch.calls.length).toEqual(5);
        expect(dispatch.calls[0].arguments).toEqual([1]);
    });
});