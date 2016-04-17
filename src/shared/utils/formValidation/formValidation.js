export const isValidPassword = password => /^[a-z0-9_-]{6,25}$/.test(password);

export const passwordsMatch = (password, repeatedPassword) => password === repeatedPassword;

export const isValidUsername = username => /^[a-z0-9_-]{3,20}$/.test(username);

export const isValidEmail = email => /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);