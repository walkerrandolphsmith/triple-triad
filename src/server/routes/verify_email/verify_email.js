import Firebase from 'firebase';
import { FIREBASE } from './../../../shared/constants/firebase';

export function verifyEmail(req, res) {
    const firebaseRef = new Firebase(FIREBASE);
    const token = req.body.token;
    const userId = token.substring(0, 36);
    firebaseRef.child('users').child(userId).once('value', snapshot => {
        if(snapshot.val().verificationToken === token) {
            firebaseRef.child('users').child(userId).child('isVerified').set(true);
            return res.status(200).send();
        } else {
            return res.status(500).send();
        }
    });
}