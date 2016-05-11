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
    }, function(error, userData) {
        debugger;
        if (error) {
            const message = {
                form: 'signUp',
                field: 'username',
                error: error
            };
        } else {
            dispatch(signUpSuccess({
                id: userData.uid,
                name: username
            }));
            dispatch(push('/games'));
        }
    });
};