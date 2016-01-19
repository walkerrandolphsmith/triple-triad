import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
import Hand from './../../../src/shared/components/hand';
import { hand, __RewireAPI__ as handRewireAPI } from './../../../src/shared/components/hand';

expect.extend(expectJSX);

describe('DECK component', () => {

    let renderer, Card;
    beforeEach(() => {
        renderer = createRenderer();

    });

    describe('Given show back', () => {
        let props;
        beforeEach(() => {
            props = {
                score: 10,
                cards: [
                    {id: 12, name: 'Cloud', owner: 1, boardIndex: -1}
                ],
                selectedCard: 12,
                showBack: true
            }
        });

        it('should render a card with the name "back"', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Hand.__Rewire__('Card', Card);


            renderer.render(
                <Hand score={props.score} cards={props.cards} selectedCard={props.selectedCard} showBack={props.showBack} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div className="hand">
                    <div className="score">{props.score}</div>
                    <Card card={{id: 12, name: 'back', owner: 1, boardIndex: -1}}
                        cardStyle={{cursor: 'pointer'}}
                        classes="selected"
                        clickAction={() => {}}>
                    </Card>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        })

    });

});