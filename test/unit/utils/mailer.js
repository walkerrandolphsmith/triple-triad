import expect from 'expect';
import sendEmail from './../../../src/server/utils/mailer';

describe('Mailer', () => {

    describe('Sending an email with valid from, to, subject, and message', () => {

        let data;
        beforeEach(() => {
           data = {
               sender: 'walker',
               to: 'recipient',
               subject: 'subject',
               message: 'message'
           }
        });

        it('should get a status of OK', () => {
            sendEmail(data, (err, status) => {
                expect(status).toEqual('OK');
                expect(err).toEqual(null);
            });
        });
    });

    describe('Sending an email without sender', () => {

        let data;
        beforeEach(() => {
            data = {
                sender: '',
                to: 'recipient',
                subject: 'subject',
                message: 'message'
            }
        });

        it('should have an error', () => {
            sendEmail(data, (err, status) => {
                expect(err).toExist;
            });
        });
    });

    describe('Sending an email without to address', () => {

        let data;
        beforeEach(() => {
            data = {
                sender: 'sender',
                to: '',
                subject: 'subject',
                message: 'message'
            }
        });

        it('should have an error', () => {
            sendEmail(data, (err, status) => {
                expect(err).toExist;
            });
        });
    });

    describe('Sending an email without a subject', () => {

        let data;
        beforeEach(() => {
            data = {
                sender: 'sender',
                to: 'to',
                subject: '',
                message: 'message'
            }
        });

        it('should have an error', () => {
            sendEmail(data, (err, status) => {
                expect(err).toExist;
            });
        });
    });

    describe('Sending an email without a message', () => {

        let data;
        beforeEach(() => {
            data = {
                sender: 'sender',
                to: 'to',
                subject: 'subject',
                message: ''
            }
        });

        it('should have an error', () => {
            sendEmail(data, (err, status) => {
                expect(err).toExist;
            });
        });
    });
});