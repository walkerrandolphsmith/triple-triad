import Game from './../../models/game/game';

export function get_games(req, res) {
    const userId = req.body.userId;

    Game.find({owner: userId}, (err, games) => {
        if(err) return res.status(500).send();
        return res.send(games);
    });
}