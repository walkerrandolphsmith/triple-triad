import CARD_TYPES from './cardTypes';

const DECK = CARD_TYPES.concat(CARD_TYPES).map((card, index) => Object.assign({}, card, {id: index, boardIndex: -1, owner: 0 }) );

export default DECK;
