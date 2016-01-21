import { Map, List } from 'immutable';
import CARD_TYPES from './cardTypes';

const DECK = CARD_TYPES.concat(CARD_TYPES)
    .map((card, index) => {
            return new Map(
                Object.assign({

                }, {
                    name: card.name,
                    level: card.level,
                    element: card.element,
                    rank: new Map(card.rank)
                }, {
                    id: index,
                    boardIndex: -1,
                    owner: 0
                })
            );

    });

export default new List(DECK);
