import { fromJS, Map, List } from 'immutable';
import { createSelector } from 'reselect';
import SERVER from './../../constants/socketActionPrefix';
import WINNER from './../../constants/winner';

export const ADD_CARD = 'ADD_CARD';
export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const CREATE_GAME_REQUEST = 'CREATE_GAME_REQUEST';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const END_AI_TURN = 'END_AI_TURN';
export const GET_GAME_FAILED = 'GET_GAME_FAILED';
export const GET_GAME_REQUEST = 'GET_GAME_REQUEST';
export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS';
export const GET_GAMES_FAILED = 'GET_GAMES_FAILED';
export const GET_GAMES_REQUEST = 'GET_GAMES_REQUEST';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const PLACE_CARD = 'PLACE_CARD';
export const RESET_GAME = 'RESET_GAME';
export const START_AI_TURN = 'START_AI_TURN';
export const SELECT_CARD = 'SELECT_CARD';
export const SELECT_PIECE = 'SELECT_PIECE';
export const SEND_INVITE_REQUEST = 'SEND_INVITE_REQUEST';
export const SEND_INVITE_SUCCESS = 'SEND_INVITE_SUCCESS';
export const SEND_INVITE_FAILED = 'SEND_INVITE_FAILED';
export const SET_PHASE = 'SET_PHASE';
export const UPDATE_BOARD = 'UPDATE_BOARD';


/**
 * 
 * ACTION CREATORS
 * 
 */

export const addCard = (id, owner) => ({
    type: SERVER + ADD_CARD,
    payload: {
        id: id,
        owner: owner
    }
});

export const endAiTurn = () => ({ type: END_AI_TURN });

export const createGameFailure = () => ({ type: CREATE_GAME_FAILED });
export const createGameRequest = () => ({ type: CREATE_GAME_REQUEST });
export const createGameSuccess = game => ({ 
    type: CREATE_GAME_SUCCESS,
    payload: {
        game: game
    }
});

export const getGameFailure = () => ({ type: GET_GAME_FAILED });
export const getGameRequest = () => ({ type: GET_GAME_REQUEST });
export const getGameSuccess = game => ({
    type: GET_GAME_SUCCESS,
    payload: {
        game: game
    }
});

export const getGamesFailure = () => ({ type: GET_GAMES_FAILED });
export const getGamesRequest = () => ({ type: GET_GAMES_REQUEST });
export const getGamesSuccess = games => ({ 
    type: GET_GAMES_SUCCESS,
    payload: {
        games: games
    }
});

export const placeCard = index => ({ type: SERVER + PLACE_CARD });

export const resetGame = () => ({ type: RESET_GAME });

export const startAiTurn= () => ({ type: START_AI_TURN });

export const selectCard = id => ({
    type: SERVER + SELECT_CARD,
    payload: {
        id: id
    }
});

export const selectPiece = index => ({
    type: SERVER + SELECT_PIECE,
    payload: {
        index: index
    }
});

export const sendInviteFailure = () => ({ type: SEND_INVITE_FAILED });

export const sendInviteRequest = () => ({ type: SEND_INVITE_REQUEST });

export const sendInviteSuccess = () => ({ type: SEND_INVITE_SUCCESS });

export const setPhase = phase => ({
    type: SERVER + SET_PHASE,
    payload: {
        phase: phase
    }
});

export const updateBoard = (index, owner) => ({
    type: SERVER + UPDATE_BOARD,
    payload: {
        index: index,
        owner: owner
    }
});

const INITIAL_STATE = new Map({
    getGames: new Map({
        loading: false,
        loaded: false,
        failed: false
    }),
    newGame: new Map({
        loading: false,
        loaded: false,
        failed: false
    }),
    gameRoute: -1,
    games: new List([])
});

/**
 *
 * REDUCER
 *
 */

export default function reducer(state = INITIAL_STATE, action = {}) {
    let { type, payload } = action;

    switch(type) {
        case ADD_CARD: return cardAdded(state, payload);
        case CREATE_GAME_FAILED: return createGameFailed(state, payload);
        case CREATE_GAME_REQUEST: return createGameRequested(state, payload);
        case CREATE_GAME_SUCCESS: return createGameSucceeded(state, payload);
        case END_AI_TURN: return aiTurnEnded(state);
        case GET_GAME_SUCCESS: return getGameSucceeded(state, payload);
        case GET_GAMES_FAILED: return getGamesFailed(state, payload);
        case GET_GAMES_REQUEST: return getGamesRequested(state, payload);
        case GET_GAMES_SUCCESS: return getGamesSucceeded(state, payload);
        case PLACE_CARD: return cardPlaced(state, payload);
        case RESET_GAME: return gameReset(state);
        case SELECT_CARD: return cardSelected(state, payload);
        case SELECT_PIECE: return pieceSelected(state, payload);
        case SET_PHASE: return phaseSet(state, payload);
        case START_AI_TURN: return aiTurnStarted(state);
        case UPDATE_BOARD: return boardUpdated(state, payload);
        default: return state;
    }
}

/**
 * 
 * REDUCERS
 * 
 */

export const cardAdded = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => {
            let deck = game.get('deck');

            deck = deck.update(
                deck.findIndex(
                    card => card.get('id') === payload.id
                ),
                card => card.set('owner', payload.owner)
            );
            return game.set('deck', deck);
        }
    );
    return state.set('games', newGames);
};

export const createGameFailed = state => state
    .setIn('newGame.failed'.split('.'), true)
    .setIn('newGame.loading'.split('.'), false)
    .setIn('newGame.loaded'.split('.'), false);

export const createGameRequested = state => state
    .setIn('newGame.failed'.split('.'), false)
    .setIn('newGame.loading'.split('.'), true)
    .setIn('newGame.loaded'.split('.'), false);

export const createGameSucceeded = (state, payload) => state
    .setIn('newGame.failed'.split('.'), false)
    .setIn('newGame.loading'.split('.'), false)
    .setIn('newGame.loaded'.split('.'), true)
    .set('games', state.get('games').push(payload.game));

export const aiTurnEnded = state => state;

export const getGameSucceeded = (state, payload) => {
    let id = payload.game._id;
    let nextState = state.set('gameRoute', id);

    let isKnownGame = state.get('games').find(game => game.get('id') === id);

    let newGame = new Map({
        'id': id,
        'owner': payload.game.owner,
        'deck': fromJS(payload.game.deck),
        'phase': payload.game.phase,
        'accepted': payload.game.accepted,
        'currentPlayer': payload.game.currentPlayer,
        'selectedCard': payload.game.selectedCard,
        'selectedPiece': payload.game.selectedPiece
    });

    let newGames;

    if(isKnownGame) {
        newGames = state.get('games').update(
            state.get('games').findIndex(
                game => game.get('id') === id
            ),
            game => newGame
        );
    }else {
        newGames = state.get('games').push(newGame)
    }

    return nextState.set('games', newGames);
};


export const getGamesFailed = state => state
    .setIn('getGames.failed'.split('.'), true)
    .setIn('getGames.loading'.split('.'), false)
    .setIn('getGames.loaded'.split('.'), false);

export const getGamesRequested = state => state
    .setIn('getGames.failed'.split('.'), false)
    .setIn('getGames.loading'.split('.'), true)
    .setIn('getGames.loaded'.split('.'), false);

export const getGamesSucceeded = (state, payload) => state
    .setIn('getGames.failed'.split('.'), false)
    .setIn('getGames.loading'.split('.'), false)
    .setIn('getGames.loaded'.split('.'), true)
    .set('games', state.get('games').concat(payload.games));

export const cardPlaced = state => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => {
            let deck = game.get('deck');

            deck = deck.update(
                deck.findIndex(
                    card => card.get('id') === game.get('selectedCard')
                ),
                card => card.set('boardIndex', game.get('selectedPiece'))
            );
            return game.set('deck', deck);
        }
    );
    return state.set('games', newGames);
};

export const gameReset = initialState => initialState;

export const cardSelected = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('selectedCard', payload.id)
    );
    return state.set('games', newGames);
};

export const pieceSelected = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('selectedPiece', payload.index)
    );
    return state.set('games', newGames);
};

export const phaseSet = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('phase', payload.phase)
    );
    return state.set('games', newGames);
};

export const aiTurnStarted = state => state;

export const boardUpdated = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => {
            let deck = game.get('deck');

            deck = deck.update(
                deck.findIndex(
                    card => card.get('boardIndex') === payload.index
                ),
                card => card.set('owner', payload.owner)
            );
            return game.set('deck', deck);
        }
    );

    return state.set('games', newGames);
};


/**
 *
 * SELECTORS
 * 
 */

export const getAvailableDeck = (deck, owner) => {
    let unique = {};
    let distinct = [];
    let i;
    for(i = 0; i < deck.size; i++) {
        if(!unique[deck.get(i).get('name')] && deck.get(i).get('owner') !== owner) {
            distinct.push(deck.get(i));
            unique[deck.get(i).get('name')] = true;
        }
    }
    return new List(distinct);
};

export const getBoard = (deck) => deck.filter(card => card.get('boardIndex') >= 0);

export const currentGameSelector = state => state.game.get('games').find(game => game.get('id') === state.game.get('gameRoute'));

export const getHand = (deck, owner) => deck.filter(card => card.get('owner') === owner && card.get('boardIndex') < 0);

export const getIsFullHand = hand => hand.size >= 5;

export const getScore = (blue, red) => ({ blue: blue, red: red });

export const getScoreForOwner = (deck, owner) => {
    return deck.filter(card => card.get('owner') === owner).size;
};

export const getValidPieces = board => {
    let boardIndexes = board.map(card => card.get('boardIndex'));
    return new List([0, 1, 2, 3, 4, 5, 6, 7, 8]).filter(index => boardIndexes.indexOf(index) < 0);
};

export const getWinner = (score, validPieces) => {
    let winner = WINNER.NONE;
    if(validPieces.size <= 0) {
        if(score.blue === score.red) {
            winner = WINNER.TIE;
        } else {
            winner = score.blue > score.red ? WINNER.BLUE : WINNER.RED;
        }
    }
    return winner;
};

const playerSelector = () => 1;
const opponentSelector = () => 2;

export const deckSelector = createSelector(
    [currentGameSelector],
    game => game.get('deck')
);

export const availableDeckSelector = createSelector(
    [deckSelector, opponentSelector],
    getAvailableDeck
);

export const boardSelector = createSelector(
    [deckSelector],
    getBoard
);

export const handSelector = createSelector(
    [deckSelector, playerSelector],
    getHand
);

export const opponentHandSelector = createSelector(
    [deckSelector, opponentSelector],
    getHand
);

const blueScoreSelector = createSelector(
    [deckSelector, playerSelector],
    getScoreForOwner
);

const redScoreSelector = createSelector(
    [deckSelector, opponentSelector],
    getScoreForOwner
);

export const scoreSelector = createSelector(
    [blueScoreSelector, redScoreSelector],
    getScore
);

export const validPiecesSelector = createSelector(
    [boardSelector],
    getValidPieces
);

export const winnerSelector = createSelector(
    [scoreSelector, validPiecesSelector],
    getWinner
);

export const isFullHandSelector = createSelector(
    [handSelector],
    getIsFullHand
);