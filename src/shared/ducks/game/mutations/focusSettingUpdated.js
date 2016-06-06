export const focusSettingUpdated = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => game.setIn('settings.focused'.split('.'), payload.setting)
    );
    return state.set('games', newGames);
};