import React from 'react';
import { Map } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';

import { Card } from './card';

expect.extend(expectJSX);

describe('CARD component', () => {

    let renderer;
    beforeEach(() => {
        renderer = createRenderer();
    });

    describe('Given the player owns the card', () => {
        let props;
        beforeEach(() => {
            props = {
                card: new Map({
                    id: 12,
                    name: 'Cloud',
                    owner: 1,
                    boardIndex: -1
                }),
                classes: 'classOne classTwo',
                cardStyle: {

                },
                clickAction: () => {

                }
            }
        });

        it('should render a card with a blue background', () => {
            renderer.render(
                <Card card={props.card} classes={props.classes} cardStyle={props.cardStyle} clickAction={props.clickAction}/>
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="card-12" className="card-wrapper classOne classTwo" onClick={() => {}}>
                    <div className="card" style={{backgroundImage: 'url(../assets/images/cards/Cloud.png), linear-gradient( 45deg, white, #608FC6 )'}}></div>
                </div>;
            expect(actualElement).toEqualJSX(expectedElement);
        })

    });

    describe('Given the opponent owns the card', () => {
        let props;
        beforeEach(() => {
            props = {
                card: new Map({
                    id: 12,
                    name: 'Cloud',
                    owner: 2,
                    boardIndex: -1
                }),
                classes: 'classOne classTwo',
                cardStyle: {

                },
                clickAction: () => {

                }
            }
        });

        it('should render a card with a blue background', () => {
            renderer.render(
                <Card card={props.card} classes={props.classes} cardStyle={props.cardStyle} clickAction={props.clickAction}/>
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="card-12" className="card-wrapper classOne classTwo" onClick={() => {}}>
                    <div className="card" style={{backgroundImage: 'url(../assets/images/cards/Cloud.png), linear-gradient( 45deg, white, #CC181E )'}}></div>
                </div>;
            expect(actualElement).toEqualJSX(expectedElement);
        })

    });


});