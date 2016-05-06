import Game from './../../models/game/game';

export function deleteGame(req, res) {
    const gameId = req.body.gameId;

    Game.find({ _id: gameId }).remove((err, game) => {
        if(err) {
            return res.status(500).send();
        }
        return res.status(200).send('deleted');
    });
}