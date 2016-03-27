import Game from './../../models/game/game';

export function createGame(req, res) {
    const deck = req.body.deck;
    const userId = req.body.userId;

    const game = new Game();
    game.owner = userId;
    game.currentPlayer = userId;
    game.deck = deck;
    game.phase = 'settingsSelection';
    game.accepted = false;
    game.save((err, newGame) => {
        if(err) {
            return res.status(500).send();
        }
        return res.status(200).send(newGame);
    });
}