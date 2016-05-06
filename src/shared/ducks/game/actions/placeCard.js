import SERVER from './../../../constants/socketActionPrefix';
import { PLACE_CARD } from './../index';
export const placeCard = index => ({ type: SERVER + PLACE_CARD });