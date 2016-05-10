import { ADD_CARD } from './../index';
export const addCard = (id, owner) => ({
    type: ADD_CARD,
    payload: {
        id: id,
        owner: owner
    }
});