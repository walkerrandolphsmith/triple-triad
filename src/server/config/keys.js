import configureEnvironment from 'dotenv';
configureEnvironment.config();

export default {
    mailgun: {
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
};