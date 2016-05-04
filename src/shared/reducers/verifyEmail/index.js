import request from 'superagent';

export const EMAIL_VERIFIED = 'EMAIL_VERIFIED';

export const emailVerified = isVerified => ({
    type: EMAIL_VERIFIED,
    payload: {
        isVerified: isVerified
    }
});

export const verifyEmail = token => dispatch => {
    return request
        .post('/api/verifyEmail')
        .send(JSON.stringify({ token: token }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(emailVerified(true));
            } else {
                dispatch(emailVerified(false));
            }
        });
};