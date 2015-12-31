import _ from 'lodash';
import CARD_TYPES from './cardTypes';

const cards = _.cloneDeep(CARD_TYPES).concat(CARD_TYPES);

const DECK = cards.map((card, index) => _.assign(card, {id: index, owner: 0 }) );

export default DECK;

