import firebase from 'firebase';
import tokenGenerator from './../utils/tokenGenerator';
import { sendInviteEmail } from './../utils/mailer';

export function invite(req, res) {
    const { gameId, invitee } = req.body;
    tokenGenerator(gameId).then((token, err) => {
        firebase
            .database()
            .ref()
            .child('games')
            .child(gameId)
            .update({ accepted: token }, onSuccess => {
                sendInviteEmail(invitee, 'invite@triple-triad.com', token, err => {
                    res.send({invitee, token, gameId});
                });
            });
    });
}