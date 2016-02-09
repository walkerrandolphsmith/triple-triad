import env from './../../shared/config/environment';
import Mailgun from 'mailgun-js';

const mailgun = new Mailgun({
    apiKey: env.keys.mailgun.apiKey,
    domain: env.keys.mailgun.domain
});

export function send_verification_email(email, token, fn) {
    const data = {
        from: "tripletriad@gmail.com",
        to: email,
        subject: 'Play Triple Triad',
        html: `
            Verify your account with the following link:
            http://${env.host}:${env.port}/verify/${token}
            Welcome to Triple Triad were you can play with your friends.
        `
    };
    sendEmail(data, fn);
}

export function send_reset_password_email(email, token, fn) {
    const data = {
        from: "tripletriad@gmail.com",
        to: email,
        subject: 'Reset password for Triple Triad',
        html: `
            Reset password with the following link:
            http://${env.host}:${env.port}/reset/${token}
            This link will not expire... yet XD.
        `
    };
    sendEmail(data, fn);
}

export function sendEmail(data, fn) {

    if(!data.from) {
        return fn(new Error('Email address required'));

    }
    if(!data.to){
        return fn(new Error('Email address required'));
    }

    if(!data.subject){
        return fn(new Error('Must contain a subject'));
    }

    if(!data.html){
        return fn(new Error('Must contain a message'));
    }

    if(env.nodeEnv === 'test'){
        return fn(null, 'OK');
    }

    mailgun.messages().send(data, (err, body) => {
        if (err) return fn(err);
        else return fn(null, body);
    })
}