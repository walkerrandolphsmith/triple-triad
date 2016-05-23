import firebase from 'firebase';
import tokenGenerator from './../../utils/tokenGenerator';
import { sendVerificationEmail } from './../../utils/mailer';
import env from './../../../shared/config/environment';

export function resendVerificationEmail(req, res) {
    const userId = req.body.userId;

    //var firebaseRef = new firebase(env.firebase.databaseURL);

    tokenGenerator(userId).then(token => {
        /*
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
        */
    });
}