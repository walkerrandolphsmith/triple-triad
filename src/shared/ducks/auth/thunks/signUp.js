import {
    isValidUsername, isValidPassword, passwordsMatch, isValidEmail
} from './../../../utils/formValidation';
import { push } from 'react-router-redux';
import { setFormError } from './../../forms/actions/setFormError';
import { signUpRequest } from './../actions/signUpRequest';
import { signUpSuccess } from './../actions/signUpSuccess';
import firebase from 'firebase';

export const signUp = user => (dispatch, getState) => {
    dispatch(signUpRequest());

    const { username, password, confirmPassword, email } = user;

    let error = false;

    if(!isValidUsername(username)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'username',
            error: 'Invalid Username'
        }));
        error = true;
    }

    if(!isValidPassword(password)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'password',
            error: 'Invalid Password'
        }));
        error = true;
    }

    if(!passwordsMatch(password, confirmPassword)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'confirmPassword',
            error: 'Passwords must match'
        }));
        error = true;
    }

    if(!isValidEmail(email)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'email',
            error: 'Invalid email address'
        }));
        error = true;
    }

    if(error) {
        return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            const firebaseAuth = getState().firebase.get('ref');
            firebaseAuth
                .child('users')
                .child(user.uid)
                .update({ name: username, avatar: '', isVerified: false });
        })
        .catch(error => {
            if (error) {
                const message = {
                    form: 'signUp',
                    field: 'username',
                    error: error
                };
                dispatch(setFormError(message));
            }
        });
};