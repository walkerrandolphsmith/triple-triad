import Game from './../../models/game/game';
import User from './../../models/user/user';
import Token from './../../models/token/token';
import { sendInviteEmail } from './../../utils/mailer/mailer';

function sendEmailCallback(data, emailErr) {
    let [res] = data;
    if(emailErr) {
        return res.status(500).send();
    }
    return res.status(200).json({ sent: true });
}

function findUserCallback(data, userErr, user) {
    let [res, invitee, token] = data;

    if(userErr) {
        return res.status(500).send();
    }
    sendInviteEmail(
        invitee,
        user.local.email,
        token.token,
        sendEmailCallback.bind(sendEmailCallback, [res])
    );
}

function newTokenCallback(data, tokenErr, token) {
    let [res, invitee, gameOwner] = data;

    if(tokenErr) {
        return res.status(500).send();
    }
    User.findById(gameOwner, findUserCallback.bind(findUserCallback, [res, invitee, token]));
}

export function invite(req, res) {
    const { gameId, invitee, gameOwner } = req.body;

    Game.findById(gameId, (err, game) => {
        if(err || game === null) {
            return res.status(500).send();
        }
        Token.new(
            game._id,
            'INVITE',
            newTokenCallback.bind(newTokenCallback, [res, invitee, gameOwner])
        );
    });
}