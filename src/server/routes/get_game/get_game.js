import Game from './../../models/game/game';

export function getGame(req, res) {
    const gameId = req.body.gameId;

    Game.findById(gameId, (err, game) => {
        if(err) {
            return res.status(500).send();
        } else {
            return res.status(200).send(game);
        }
    });
}