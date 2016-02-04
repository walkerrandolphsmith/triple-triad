import env from './../../shared/config/environment';
import keys from './../config/keys';
import Mailgun from 'mailgun-js';

const mailgun = new Mailgun({
    apiKey: keys.mailgun.apiKey,
    domain: keys.mailgun.domain
});

function send_verification_email(user) {
    const data = {
        sender: "tripletriad@gmail.com",
        to: user.email,
        subject: 'Play Triple Triad',
        html: `
            Verify your account with the following link:
            <a href="http://${env.host}:${env.port}/validate/${user.verificationKey}</a>
            Welcome to Triple Triad were you can play with your friends.
        `
    };
    sendEmail(data, function(error, result){});
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