import { Map, List } from 'immutable';

export const convertGame = game => {
    //consider using immutable records for Rank, Card, Game, etc
    const clonedCards = game.deck.map(card => extend({}, card));

    const cards = clonedCards.map(card => {
        const rank = new Map(card.rank);
        card.rank = rank;
        return new Map(card);
    });

    const deck = new List(cards);

    return new Map({
        'id': game.id,
        'owner': game.owner,
        'opponent': game.opponent,
        'deck': deck,
        'phase': game.phase,
        'accepted': game.accepted,
        'currentPlayer': game.currentPlayer,
        'selectedCard': game.selectedCard,
        'selectedPiece': game.selectedPiece
    });
};

var extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call( obj, prop )) {
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;
};