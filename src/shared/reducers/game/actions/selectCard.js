import SERVER from './../../../constants/socketActionPrefix';
import { SELECT_CARD } from './../index';
export const selectCard = id => ({
    type: SERVER + SELECT_CARD,
    payload: {
        id: id
    }
});