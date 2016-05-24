import firebase from 'firebase';
import env from './../../shared/config/environment';

export function verifyEmail(req, res) {
    //const firebaseRef = new firebase(env.firebase.databaseURL);
    const token = req.body.token;
    const userId = token.substring(0, 36);
    /*
    firebaseRef.child('users').child(userId).once('value', snapshot => {
        if(snapshot.val().verificationToken === token) {
            firebaseRef.child('users').child(userId).child('isVerified').set(true);
            return res.status(200).send();
        } else {
            return res.status(500).send();
        }
    });
    */
}