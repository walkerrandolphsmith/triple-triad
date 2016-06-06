export const settingUpdated = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => game.setIn(`settings.${payload.setting}`.split('.'), !game[payload.setting])
    );
    return state.set('games', newGames);
};