import { isValidEmail, isValidPassword } from './../../../utils/formValidation/formValidation';
import { push } from 'react-router-redux';
import { setFormError } from './../../forms/actions/setFormError';
import { signInRequest } from './../actions/signInRequest';
import { signInSuccess } from './../actions/signInSuccess';

export const signIn = user => (dispatch, getState) => {
    dispatch(signInRequest());

    let error;
    if(!isValidEmail(user.username)) {
        dispatch(setFormError({
            form: 'signIn',
            field: 'username',
            error: 'Invalid Email'
        }));
        error = true;
    }

    if(!isValidPassword(user.password)) {
        dispatch(setFormError({
            form: 'signIn',
            field: 'password',
            error: 'Invalid Password'
        }));
        error = true;
    }

    if(error) {
        return;
    }
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.authWithPassword({
        email    : user.username,
        password : user.password
    }, (error, authData) => {
        if (error) {
            const message = {
                form: 'signIn',
                field: 'username',
                error: error
            };
            dispatch(setFormError(message));
        } else {
            dispatch(push('/games'));
        }
    });
};