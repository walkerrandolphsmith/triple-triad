export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    devPort: process.env.DEV_PORT || 3001,
    apiHost: process.env.API_HOST || 'localhost',
    apiPort: process.env.API_PORT || 3002,
    isBrowser: process.browser,
    nodeEnv: process.env.NODE_ENV,
    keys: {
        mailgun: {
            apiKey: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        },
        firebase: {
            apiKey: 'AIzaSyDo4MhUNzGxnaT1IxYKBOHbsK1ixCB7zCs'
        }
    },
    firebase: {
        authDomain: 'triple-triad.firebaseapp.com',
        databaseURL: 'https://triple-triad.firebaseio.com',
        dataStorage: 'firebase-triple-triad.appspot.com'
    }
};