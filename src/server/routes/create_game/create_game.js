import Game from './../../models/game/game';

export function createGame(req, res) {
    const deck = req.body.deck;
    const userId = req.body.userId;
    const phase = req.body.phase;
    const game = new Game();
    game.owner = userId;
    game.currentPlayer = userId;
    game.deck = deck;
    game.phase = phase;
    game.accepted = false;
    game.selectedCard = -1;
    game.selectedPiece = -1;
    game.save((err, newGame) => {
        if(err) {
            return res.status(500).send();
        }
        return res.status(200).send(newGame);
    });
}