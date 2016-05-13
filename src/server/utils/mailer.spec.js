import expect from 'expect';
import { sendEmail } from './mailer';

describe('src/server/utils/mailer', () => {
    let data;
    describe('Sending an email with valid from, to, subject, and message', () => {
        beforeEach(() => {
            data = {
                from: 'walker',
                to: 'recipient',
                subject: 'subject',
                html: 'message'
            };
        });

        it('should get a status of OK', () => {
            sendEmail(data, (err, status) => {
                expect(status).toEqual('OK');
                expect(err).toEqual(null);
            });
        });
    });

    describe('Sending an email without sender', () => {
        beforeEach(() => {
            data = {
                from: '',
                to: 'recipient',
                subject: 'subject',
                html: 'message'
            };
        });

        it('should have an error', () => {
            sendEmail(data, err => {
                expect(err).toExist();
            });
        });
    });

    describe('Sending an email without to address', () => {
        beforeEach(() => {
            data = {
                from: 'sender',
                to: '',
                subject: 'subject',
                html: 'message'
            };
        });

        it('should have an error', () => {
            sendEmail(data, err => {
                expect(err).toExist();
            });
        });
    });

    describe('Sending an email without a subject', () => {
        beforeEach(() => {
            data = {
                from: 'sender',
                to: 'to',
                subject: '',
                html: 'message'
            };
        });

        it('should have an error', () => {
            sendEmail(data, err => {
                expect(err).toExist();
            });
        });
    });

    describe('Sending an email without a message', () => {
        beforeEach(() => {
            data = {
                from: 'sender',
                to: 'to',
                subject: 'subject',
                html: ''
            };
        });

        it('should have an error', () => {
            sendEmail(data, err => {
                expect(err).toExist();
            });
        });
    });
});