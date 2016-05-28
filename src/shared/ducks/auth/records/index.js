import { Record } from 'immutable';

export const NameRecord = new Record({
    short: '',
    first: '',
    last: ''
});

export const UserRecord = new Record({
    id: -1,
    email: '',
    username: '',
    name: new NameRecord,
    phone: '',
    avatar: '',
    isVerified: false
});

export const convertUserToRecord = user => new UserRecord({
    id: user.id,
    username: user.username,
    name: new NameRecord(user.name),
    email: user.email,
    phone: user.phone,
    avatar: user.avatar,
    isVerified: user.isVerified
});