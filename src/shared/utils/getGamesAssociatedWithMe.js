export const getGamesAssociatedWithMe = (id, games) => games.filter(
    game => game.owner === id || game.opponent === id
);