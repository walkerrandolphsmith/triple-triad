export const getGamesAssociatedWithMe = (id, games) => games.filter(
    game => game.get('owner') === id || game.get('opponent') === id
);