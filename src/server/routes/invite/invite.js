import { sendInviteEmail } from './../../utils/mailer/mailer';

export function invite(req, res) {
    const { gameId, invitee, gameOwner } = req.body;

    /*Game.findById(gameId, (err, game) => {
        if(err || game === null) {
            return res.status(500).send();
        }
        Token.new(
            game._id,
            'INVITE',
            newTokenCallback.bind(newTokenCallback, [res, invitee, gameOwner])
        );
    });*/
}