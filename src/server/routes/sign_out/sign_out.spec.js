import expect from 'expect';
import { sign_out } from './sign_out';

describe('sign_out', () => {

    describe('Given a request and a response, when signing out', () => {

        let req, res, logOut, status, end;
        beforeEach(() => {
            logOut = expect.createSpy();
            end = expect.createSpy();
            req = {
                logOut: logOut
            };
            res = {
                status: () => ({
                    end: end
                })
            };

            status = expect.spyOn(res, 'status').andCallThrough();

            sign_out(req, res);
        });

        it('should call log out', () => {
            expect(logOut).toHaveBeenCalled();
        });

        it('should send a status of 200', () => {
            expect(status).toHaveBeenCalledWith(200);
        });

        it('should call end', () => {
            expect(end).toHaveBeenCalled();
        });

    });

});