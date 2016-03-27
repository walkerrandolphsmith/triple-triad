import Game from './../../models/game/game';
import User from './../../models/user/user';
import Token from './../../models/token/token';
import { sendInviteEmail } from './../../utils/mailer/mailer';

export function invite(req, res) {
    const { gameId, invitee, gameOwner } = req.body;

    Game.findById(gameId, (err, game) => {
        if(err || game === null) {
            res.status(500).send();
        } else {
            Token.new(game._id, 'INVITE', (tokenErr, token) => {
                if(tokenErr) {
                    res.status(500).send();
                } else {
                    User.findById(gameOwner, (userErr, user) => {
                        if(userErr) {
                            res.status(500).send();
                        } else {
                            sendInviteEmail(invitee, user.local.email, token.token, emailErr => {
                                if(emailErr) {
                                    return res.status(500).send();
                                } else {
                                    return res.status(200).json({ sent: true });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
