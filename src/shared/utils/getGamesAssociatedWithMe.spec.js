import expect from 'expect';
import { List } from 'immutable';
import { GameRecord } from './../ducks/game/records';
import { getGamesAssociatedWithMe } from './getGamesAssociatedWithMe';

describe('src/shared/utils/getGamesAssociatedWithMe', () => {
    describe('Given an id and a list of games that is empty', () => {
        let id;
        let games;
        beforeEach(() => {
            id = 20;
            games = new List([]);
        });
        
        describe('When invoking getGamesAssociatedWithMe', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesAssociatedWithMe(id, games);
            });
            
            it('should return an empty list', () => {
               expect(actual.toJS()).toEqual([]); 
            });
        });
    });
    
    describe('Given an id and a list of games in which no game contains an owner or oppoent with that id', () => {
        let id;
        let games;
        beforeEach(() => {
            id = 20;
            games = new List([
                new GameRecord()
            ]);
        });

        describe('When invoking getGamesAssociatedWithMe', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesAssociatedWithMe(id, games);
            });

            it('should return an empty list', () => {
                expect(actual.toJS()).toEqual([]);
            });
        });
    });

    describe('Given an id and a list of games in which at least one game contains an owner with that id', () => {
        let id;
        let games;
        let game;
        beforeEach(() => {
            id = 20;
            game = new GameRecord({ owner: id });
            games = new List([
                game
            ]);
        });

        describe('When invoking getGamesAssociatedWithMe', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesAssociatedWithMe(id, games);
            });

            it('should return a list containing the game', () => {
                expect(actual.toJS()).toEqual([game.toJS()]);
            });
        });
    });

    describe('Given an id and a list of games in which at least one game contains an opponent with that id', () => {
        let id;
        let games;
        let game;
        beforeEach(() => {
            id = 20;
            game = new GameRecord({ opponent: id });
            games = new List([
                game
            ]);
        });

        describe('When invoking getGamesAssociatedWithMe', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesAssociatedWithMe(id, games);
            });

            it('should return a list containing the game', () => {
                expect(actual.toJS()).toEqual([game.toJS()]);
            });
        });
    });

    describe('Given an id and a list of games in which at least one game contains an owner and opponent with that id', () => {
        let id;
        let games;
        let game;
        beforeEach(() => {
            id = 20;
            game = new GameRecord({ owner: id, opponent: id });
            games = new List([
                game
            ]);
        });

        describe('When invoking getGamesAssociatedWithMe', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesAssociatedWithMe(id, games);
            });

            it('should return a list containing the game', () => {
                expect(actual.toJS()).toEqual([game.toJS()]);
            });
        });
    });
});