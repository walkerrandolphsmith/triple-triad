import cookie from 'react-cookie';

export function checkAuth() {
    return cookie.load('username') ? true : false;
}
