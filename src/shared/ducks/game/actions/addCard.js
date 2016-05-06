import SERVER from './../../../constants/socketActionPrefix';
import { ADD_CARD } from './../index';
export const addCard = (id, owner) => ({
    type: SERVER + ADD_CARD,
    payload: {
        id: id,
        owner: owner
    }
});