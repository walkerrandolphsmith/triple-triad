export function isValidPassword(password) {
    return /^[a-z0-9_-]{6,25}$/.test(password);
}

export function passwordsMatch(password, repeatedPassword) {
    return password === repeatedPassword;
}

export function isValidUsername(username) {
    return /^[a-z0-9_-]{3,20}$/.test(username);
}

export function isValidEmail(email) {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
}