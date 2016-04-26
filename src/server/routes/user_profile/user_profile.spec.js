import expect from 'expect';
import { userProfile, __RewireAPI__ } from './user_profile';

describe('src/server/routes/userProfile', () => {
    let req;
    let res;
    let userId;
    let user;
    let status;
    let send;
    let json;
    beforeEach(() => {
        userId = 20;
        req = {
            body: {
                userId: userId
            }
        };
    });

    describe('Given a request containing a user id, and a response', () => {
        describe('When retrieving the user profile', () => {
            let findById;
            beforeEach(() => {
                res = {};
                findById = expect.createSpy();
                __RewireAPI__.__Rewire__('User', {
                    findById: findById
                });
            });

            it('should look up the user by id', () => {
                userProfile(req, res);
                expect(findById).toHaveBeenCalled();
            });
        });

        describe('Given retrieving the user by id and exercising the callback', () => {
            describe('When the user is found with no error', () => {
                beforeEach(() => {
                    user = { id: userId, local: { verified: true } };
                    __RewireAPI__.__Rewire__('User', {
                        findById: (id, fn) => {
                            fn(null, user);
                        }
                    });


                    json = expect.createSpy();

                    res = {
                        status: () => ({
                            json: json
                        })
                    };

                    status = expect.spyOn(res, 'status').andCallThrough();
                });

                it('should return a status of 200 and the user\'s id and name', () => {
                    userProfile(req, res);
                    expect(status).toHaveBeenCalledWith(200);
                    expect(json).toHaveBeenCalledWith({ verified: user.local.verified });
                });
            });

            describe('When an error occurs', () => {
                beforeEach(() => {
                    __RewireAPI__.__Rewire__('User', {
                        findById: (id, fn) => {
                            fn(new Error(), {});
                        }
                    });


                    send = expect.createSpy();

                    res = {
                        status: () => ({
                            send: send
                        })
                    };

                    status = expect.spyOn(res, 'status').andCallThrough();
                });

                it('should return a status of 500', () => {
                    userProfile(req, res);
                    expect(status).toHaveBeenCalledWith(500);
                    expect(send).toHaveBeenCalled();
                });
            });

            describe('When no user is found by given id', () => {
                beforeEach(() => {
                    __RewireAPI__.__Rewire__('User', {
                        findById: (id, fn) => {
                            fn(null, null);
                        }
                    });


                    send = expect.createSpy();

                    res = {
                        status: () => ({
                            send: send
                        })
                    };

                    status = expect.spyOn(res, 'status').andCallThrough();
                });

                it('should return a status of 500', () => {
                    userProfile(req, res);
                    expect(status).toHaveBeenCalledWith(500);
                    expect(send).toHaveBeenCalled();
                });
            });
        });
    });
});