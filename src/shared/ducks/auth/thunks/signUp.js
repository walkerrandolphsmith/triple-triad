import {
    isValidUsername, isValidPassword, passwordsMatch, isValidEmail
} from './../../../utils/formValidation/formValidation';
import { push } from 'react-router-redux';
import { setFormError } from './../../forms/actions/setFormError';
import { signUpRequest } from './../actions/signUpRequest';
import { signUpSuccess } from './../actions/signUpSuccess';
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

    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.createUser({
        email    : email,
        password : password
    }, (error, userData) => {
        if (error) {
            const message = {
                form: 'signUp',
                field: 'username',
                error: error
            };
            dispatch(setFormError(message));
        } else {
            firebaseRef.child('users').child(userData.uid).set({
                name: username,
                email: email,
                avatar: 'assets/images/default-user.png',
                isVerified: false
            });
            dispatch(push('/games'));
        }
    });
};