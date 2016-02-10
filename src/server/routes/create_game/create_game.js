import Game from './../../models/game/game';

export function create_game(req, res) {
    const deck = req.body.deck;
    const userId = req.body.userId;

    const game = new Game();
    game.owner = userId;
    game.currentPlayer = userId;
    game.deck = deck;
    game.phase = 'settings-selection';

    game.save((err, newGame) => {
        if(err) {
            return  res.status(500).send();
        }
        else{
            return res.status(200).send(newGame);
        }
    });
}