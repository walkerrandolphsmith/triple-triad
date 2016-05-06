import React from 'react';
import { Map, List } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createRenderer } from 'react-addons-test-utils';
import { Hand, __RewireAPI__ as handRewireAPI } from './hand';

expect.extend(expectJSX);

describe('HAND component', () => {
    let renderer;
    beforeEach(() => {
        renderer = createRenderer();
    });

    describe('Given show back', () => {
        let props;
        beforeEach(() => {
            props = {
                score: 10,
                cards: new List([
                    new Map({ id: 12, name: 'Cloud', owner: 1, boardIndex: -1 })
                ]),
                selectedCard: 12,
                showBack: true
            };
        });

        it('should render a card with the name "back"', () => {
            class Card extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            handRewireAPI.__Rewire__('Card', Card);

            renderer.render(
                <Hand score={ props.score } cards={ props.cards } selectedCard={ props.selectedCard } showBack={ props.showBack } />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div className="hand">
                    <div className="score">{props.score}</div>
                    <Card card={new Map({ id: 12, name: 'back', owner: 1, boardIndex: -1 })}
                        cardStyle={{ cursor: 'pointer' }}
                        classes='selected'
                        clickAction={() => {}} />
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given one card owned by the player', () => {
        let props;
        beforeEach(() => {
            props = {
                score: 10,
                cards: new List([
                    new Map({ id: 12, name: 'Cloud', owner: 1, boardIndex: -1 })
                ]),
                selectedCard: 12,
                showBack: false
            };
        });

        it('should render a card with a pointer', () => {
            class Card extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            handRewireAPI.__Rewire__('Card', Card);
            renderer.render(
                <Hand score={ props.score } cards={ props.cards } selectedCard={ props.selectedCard } showBack={ props.showBack } />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div className="hand">
                    <div className="score">{props.score}</div>
                    <Card card={props.cards.get(0)}
                        cardStyle={{ cursor: 'pointer' }}
                        classes='selected'
                        clickAction={() => {}} />
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given one card not owned by the player', () => {
        let props;
        beforeEach(() => {
            props = {
                score: 10,
                cards: new List([
                    new Map({ id: 12, name: 'Cloud', owner: 2, boardIndex: -1 })
                ]),
                selectedCard: 12,
                showBack: false
            };
        });

        it('should render a card with a default cursor', () => {
            class Card extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            handRewireAPI.__Rewire__('Card', Card);
            renderer.render(
                <Hand score={ props.score } cards={ props.cards } selectedCard={ props.selectedCard } showBack={ props.showBack } />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div className="hand">
                    <div className="score">{props.score}</div>
                    <Card card={props.cards.get(0)}
                        cardStyle={{ cursor: 'default' }}
                        classes='selected'
                        clickAction={() => {}} />
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given many cards in which only one is selected', () => {
        let props;
        beforeEach(() => {
            props = {
                score: 10,
                cards: new List([
                    new Map({ id: 12, name: 'Cloud', owner: 2, boardIndex: -1 }),
                    new Map({ id: 2, name: 'Cloud', owner: 2, boardIndex: -1 })
                ]),
                selectedCard: 12,
                showBack: false
            };
        });

        it('should render a card with selected class and others without a class', () => {
            class Card extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            handRewireAPI.__Rewire__('Card', Card);
            renderer.render(
                <Hand score={ props.score } cards={ props.cards } selectedCard={ props.selectedCard } showBack={ props.showBack } />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div className="hand">
                    <div className="score">{props.score}</div>
                    <Card card={props.cards.get(0)}
                        cardStyle={{ cursor: 'default' }}
                        classes='selected'
                        clickAction={() => {}} />
                    <Card card={props.cards.get(1)}
                        cardStyle={{ cursor: 'default' }}
                        classes=''
                        clickAction={() => {}} />
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });
});