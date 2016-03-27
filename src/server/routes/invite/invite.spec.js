import expect from 'expect';
import Invite from './invite';
import { invite, __RewireAPI__ as inviteRewireAPI } from './invite';

describe('/api/invite', () => {

    let req, res;

    beforeEach(() => {
        req = {
            body: {
                gameId: 20,
                gameOwner: 1,
                invitee: 'tester@gmail.com'
            }
        };
    });

    describe('Given a request containing a game id and a response', () => {

        let findById = expect.createSpy();
        beforeEach(() => {
            res = {
                status: function() { return this; },
                send: function() { return this; }
            };
            Invite.__Rewire__('Game', {
                findById: findById
            });

            invite(req, res);
        });

        it('should try to find one game', () => {
            expect(findById).toHaveBeenCalled();
        });
    });

    describe('Given a game is not found', () => {
        let status, send;
        beforeEach(() => {
            send = expect.createSpy();
            res = {
                status: () => ({
                    send: send
                })
            };
            status = expect.spyOn(res, 'status').andCallThrough();

            Invite.__Rewire__('Game', {
                findById: (schema, cb) => {
                    cb(null, null)
                }
            });

            invite(req, res);
        });

        it('should return a status of 500', () => {
            expect(status).toHaveBeenCalledWith(500);
            expect(send).toHaveBeenCalled();
        });
    });

    describe('Given an error is thrown when retrieving a game', () => {
        let status, send;
        beforeEach(() => {
            send = expect.createSpy();
            res = {
                status: () => ({
                    send: send
                })
            };
            status = expect.spyOn(res, 'status').andCallThrough();

            Invite.__Rewire__('Game', {
                findById: (schema, cb) => {
                    cb(new Error(), {})
                }
            });

            invite(req, res);
        });

        it('should return a status of 500', () => {
            expect(status).toHaveBeenCalledWith(500);
            expect(send).toHaveBeenCalled();
        });
    });

    describe('Given a game is found', () => {
        let status, send;
        beforeEach(() => {
            send = expect.createSpy();
            res = {
                status: () => ({
                    send: send
                })
            };
            status = expect.spyOn(res, 'status').andCallThrough();

            Invite.__Rewire__('Game', {
                findById: (schema, cb) => {
                    cb(null, {})
                }
            });
        });

        describe('When creating a token', () => {
            let newSpy;
            beforeEach(() => {
                newSpy = expect.createSpy();
                Invite.__Rewire__('Token', {
                    new: newSpy
                });

                invite(req, res);
            });

            it('should call new', () => {
                expect(newSpy).toHaveBeenCalled();
            });
        });

        describe('When there is an error creating a token', () => {
            let newSpy;
            beforeEach(() => {
                newSpy = expect.createSpy();
                Invite.__Rewire__('Token', {
                    new: (id, type, cb) => {
                        cb(new Error(), {});
                    }
                });

                invite(req, res);
            });

            it('should return a status of 500', () => {
                expect(status).toHaveBeenCalledWith(500);
                expect(send).toHaveBeenCalled();
            });
        });


        describe('Given a game is found, and a token is successfully created', () => {
            beforeEach(() => {
                Invite.__Rewire__('Token', {
                    new: (id, type, cb) => {
                        cb(null, {})
                    }
                });
            });

            describe('When looking up the email of the sender of the invite', () => {
                let findById;
                beforeEach(() => {
                    findById = expect.createSpy();
                    Invite.__Rewire__('User', {
                        findById: findById
                    });
                    invite(req, res);
                });

                it('should attempt to look up a user given the id', () => {
                    expect(findById).toHaveBeenCalled()
                });
            });

            describe('Given the user can not be found', () => {

                describe('When sending the email', () => {
                    let sendInvite;
                    beforeEach(() => {
                        Invite.__Rewire__('User', {
                            findById: (id, cb) => {
                                cb(new Error(), null)
                            }
                        });
                        invite(req, res);
                    });

                    it('should attempt to send an invite email', () => {
                        expect(status).toHaveBeenCalledWith(500);
                        expect(send).toHaveBeenCalled();
                    });
                });
            });

            describe('Given the user can be found', () => {

                describe('When sending the email', () => {
                    let sendInvite;
                    beforeEach(() => {
                        Invite.__Rewire__('User', {
                            findById: (id, cb) => {
                                cb(null, {
                                    local: {
                                        email: 'tester@gmail.com'
                                    }
                                })
                            }
                        });
                        sendInvite = expect.createSpy();
                        Invite.__Rewire__('sendInviteEmail', sendInvite);
                        invite(req, res);
                    });

                    it('should attempt to send an invite email', () => {
                        expect(sendInvite).toHaveBeenCalled()
                    });

                    describe('When sending an email', () => {
                        describe('When email is sent without error', () => {
                            let json;
                            beforeEach(() => {
                                Invite.__Rewire__('sendInviteEmail', (toEmail, fromEmail, token, cb) => {
                                    cb(null);
                                });
                                json = expect.createSpy();
                                res = {
                                    status: () => ({
                                        json: json
                                    })
                                };
                                status = expect.spyOn(res, 'status').andCallThrough();
                                invite(req, res);
                            });

                            it('should respond with json', () => {
                                expect(status).toHaveBeenCalledWith(200);
                                expect(json).toHaveBeenCalledWith({ sent: true })
                            })
                        });

                        describe('When there is an error sending email', () => {
                            beforeEach(() => {
                                Invite.__Rewire__('sendInviteEmail', (toEmail, fromEmail, token, cb) => {
                                    cb(new Error());
                                });
                                invite(req, res);
                            });

                            it('should respond with status 500', () => {
                                expect(status).toHaveBeenCalledWith(500);
                                expect(send).toHaveBeenCalled();
                            })
                        });
                    });
                });
            });
        });
    });
});