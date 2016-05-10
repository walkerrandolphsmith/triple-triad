import expect from 'expect';
import tokenFactory from './tokenFactory';
import { __RewireAPI__ } from './tokenFactory';

describe('src/server/utils/token/tokenFactory', () => {
    describe('Given a token type, an id, and a callback', () => {
        let tokenType;
        let id;
        let callback;
        let tokenGenerator;
        beforeEach(() => {
            tokenType = { };
            id = 20;
            callback = expect.createSpy();
            tokenGenerator = expect.createSpy().andCall(() => Promise.resolve());
            __RewireAPI__.__Rewire__('tokenGenerator', tokenGenerator);
        });

        describe('When the factory creates a token', () => {
            let actual;
            beforeEach(() => {
                actual = tokenFactory(tokenType, id, callback);
            });

            it('should call tokenGenerator given the token id', () => {
                expect(tokenGenerator).toHaveBeenCalledWith(id);
            });
        });
    });
});