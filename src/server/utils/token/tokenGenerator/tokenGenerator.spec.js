import expect from 'expect';
import tokenGenerator from './tokenGenerator';

describe('token generator', () => {
    describe('Given a user id, when generating a token', () => {
        let id;
        beforeEach(() => {
            id = 'AAAAAA';
        });

        it('should generate a string which contains the given user id as the first n characters', done => {
            tokenGenerator(id).then(token => {
                expect(token.startsWith(id)).toEqual(true);
                done();
            });
        });

        it('should generate a string 24 digits longer excluding the user id prefix', done => {
            tokenGenerator(id).then(token => {
                expect(token.replace(id, '').length).toEqual(24);
                done();
            });
        });

        it('should generate a string void of forward slash', done => {
            tokenGenerator(id).then(token => {
                expect(token.indexOf('/')).toEqual(-1);
                done();
            });
        });

        it('should generate a string void of the plus symbol', done =>{
            tokenGenerator(id).then(token => {
                expect(token.indexOf('+')).toEqual(-1);
                done();
            });
        });
    });
});