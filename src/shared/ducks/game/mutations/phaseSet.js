export const phaseSet = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => game.set('phase', payload.phase)
    );
    return state.set('games', newGames);
};
