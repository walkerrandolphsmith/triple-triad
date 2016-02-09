export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    devPort: process.env.PORT || 3001,
    apiHost: process.env.HOST || 'localhost',
    apiPort: process.env.PORT || 3002,
    nodeEnv: process.env.NODE_ENV,
    mongoUri: process.env.MONGOLAB_URI || `mongodb://localhost/${process.env.PORT || 3000}/test` || 'mongodb://db',
    keys: {
        mailgun: {
            apiKey: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        }
    }
};