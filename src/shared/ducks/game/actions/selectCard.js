import { SELECT_CARD } from './../index';

export const selectCard = id => ({
    type: SELECT_CARD,
    payload: {
        id: id
    }
});