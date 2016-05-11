import Firebase from 'firebase';
import { FIREBASE } from './../../../shared/constants/firebase';
import tokenGenerator from './../../utils/token/tokenGenerator/tokenGenerator';
import { sendVerificationEmail } from './../../utils/mailer/mailer';

export function resendVerificationEmail(req, res) {
    const userId = req.body.userId;

    var firebaseRef = new Firebase(FIREBASE);

    tokenGenerator(userId).then(token => {
        firebaseRef.child('users').child(userId).child('verificationToken').set(token);
        firebaseRef.child('users').child(userId).once('value', snapshot => {
            const user = snapshot.val();
            sendVerificationEmail(user.email, token, emailErr => {
                if(emailErr) {
                    return res.status(500).send();
                }
                return res.json({ sent: true });
            });
        });
    });
}