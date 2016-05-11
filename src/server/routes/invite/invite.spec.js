import expect from 'expect';
import { invite, __RewireAPI__ } from './invite';

describe('src/server/routes/invite', () => {
    let req;
    let res;
    let status;
    let send;
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
        beforeEach(() => {
            res = {
                status: function() {
                    return this;
                },
                send: function() {
                    return this;
                }
            };
            invite(req, res);
        });
    });
});