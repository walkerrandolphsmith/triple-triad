import React from 'react';
import { Map, List } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
import Deck from './../../../src/shared/components/deck';
import { deck, __RewireAPI__ as deckRewireAPI } from './../../../src/shared/components/deck';

expect.extend(expectJSX);

describe('DECK component', () => {

    let renderer, Card;
    beforeEach(() => {
        renderer = createRenderer();

    });

    describe('Given there is only one card, owned by player and it is selected', () => {
        let props;
        beforeEach(() => {
            props = {
                cards: new List([
                    new Map({id: 12, name: 'Cloud', owner: 1, boardIndex: -1})
                ]),
                selectedCard: 12,
                isHandSelected: false
            }
        });

        it('should render a card with a selected class', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Deck.__Rewire__('Card', Card);


            renderer.render(
                <Deck cards={props.cards} selectedCard={props.selectedCard} isHandSelected={props.isHandSelected} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="cards">
                    <Card card={props.cards.get(0)}
                        cardStyle={{cursor: 'pointer', opacity: '0.5'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })

    });

    describe('Given there are many cards, all owned by player, an one is selected', () => {
        let props;
        beforeEach(() => {
            props = {
                cards: new List([
                    new Map({id: 12, name: 'Cloud', owner: 1, boardIndex: -1}),
                    new Map({id: 1, name: 'Barrent', owner: 1, boardIndex: -1})
                ]),
                selectedCard: 12,
                isHandSelected: false
            }
        });

        it('should render a two cards, one selected and one not selected', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Deck.__Rewire__('Card', Card);


            renderer.render(
                <Deck cards={props.cards} selectedCard={props.selectedCard} isHandSelected={props.isHandSelected} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="cards">
                    <Card card={props.cards.get(0)}
                        cardStyle={{cursor: 'pointer', opacity: '0.5'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                    <Card card={props.cards.get(1)}
                        cardStyle={{cursor: 'pointer', opacity: '0.5'}}
                        classes=""
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })

    });

    describe('Give a card owned by player', () => {
        let props;
        beforeEach(() => {
            props = {
                cards: new List([
                    new Map({id: 12, name: 'Cloud', owner: 1, boardIndex: -1})
                ]),
                selectedCard: 12,
                isHandSelected: false
            }
        });

        it('should render a card with a opacity and a pointer', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Deck.__Rewire__('Card', Card);


            renderer.render(
                <Deck cards={props.cards} selectedCard={props.selectedCard} isHandSelected={props.isHandSelected} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="cards">
                    <Card card={props.cards.get(0)}
                        cardStyle={{cursor: 'pointer', opacity: '0.5'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })
    });

    describe('Give a unowned card and a partially selected hand', () => {
        let props;
        beforeEach(() => {
            props = {
                cards: new List([
                    new Map({id: 12, name: 'Cloud', owner: 0, boardIndex: -1})
                ]),
                selectedCard: 12,
                isHandSelected: false
            }
        });

        it('should render a card with a pointer', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Deck.__Rewire__('Card', Card);


            renderer.render(
                <Deck cards={props.cards} selectedCard={props.selectedCard} isHandSelected={props.isHandSelected} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="cards">
                    <Card card={props.cards.get(0)}
                        cardStyle={{cursor: 'pointer', opacity: '1'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })
    });

    describe('Give a card not owned and a selected hand', () => {
        let props;
        beforeEach(() => {
            props = {
                cards: new List([
                    new Map({id: 12, name: 'Cloud', owner: 0, boardIndex: -1})
                ]),
                selectedCard: 12,
                isHandSelected: true
            }
        });

        it('should render a card with a default cursor', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Deck.__Rewire__('Card', Card);


            renderer.render(
                <Deck cards={props.cards} selectedCard={props.selectedCard} isHandSelected={props.isHandSelected} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="cards">
                    <Card card={props.cards.get(0)}
                        cardStyle={{cursor: 'default', opacity: '1'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })
    });

});