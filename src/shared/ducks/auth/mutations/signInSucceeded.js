import { UserRecord } from './../records';

export const signInSucceeded = (state, payload) => state
    .set('signingIn', true)
    .set('user', new UserRecord(payload.user));