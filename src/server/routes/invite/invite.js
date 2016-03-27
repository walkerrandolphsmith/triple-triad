import Game from './../../models/game/game';
import User from './../../models/user/user';
import Token from './../../models/token/token';
import { send_invite_email } from './../../utils/mailer/mailer';

export function invite(req, res, next) {
    const { gameId, invitee, gameOwner } = req.body;

    Game.findById(gameId, (err, game) => {
        if(err || game === null) {
            res.status(500).send();
        } else {
            Token.new(game._id, 'INVITE', (err, token) => {
                if(err) {
                    res.status(500).send();
                } else {
                    User.findById(gameOwner, (err, user) => {
                       if(err) {
                           res.status(500).send();
                       } else {
                           send_invite_email(invitee, user.local.email, token.token, err => {
                               if(err) {
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
