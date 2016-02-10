import React from 'react';
import { Map, List } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
import Board from './board';
import { board, __RewireAPI__ as boardRewireAPI } from './board';

expect.extend(expectJSX);

describe('BOARD component', () => {

    let renderer, Card;
    beforeEach(() => {
        renderer = createRenderer();

    });

    describe('Given an empty board without a selected piece', () => {
        let props;
        beforeEach(() => {
            props = {
                validPieces: [0,1,2,3,4,5,6,7,8],
                selectedPiece: -1,
                cards: new List([

                ])
            }
        });

        it('should render a 3 lanes each containing 3 pieces, such that each piece whose id corresponds to a number in the valid pieces gets a cursor style of pointer', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Board.__Rewire__('Card', Card);


            renderer.render(
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} cards={props.cards} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board">
                    <div key={0} className='lane'>
                        <div key={0} id={0} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${0}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${1}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${2}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={1} className='lane'>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${3}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${4}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${5}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={2} className='lane'>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${6}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${7}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${8}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                    </div>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        });

    });

    describe('Given a board with one card and a selected piece', () => {
        let props;
        beforeEach(() => {
            props = {
                validPieces: [],
                selectedPiece: 0,
                cards: new List([
                    new Map({id: 1, owner: 1, name: "Cloud", boardIndex: 1})
                ])
            }
        });

        it('should render a card in the piece whose id corresponds to the cards board index and apply a selected class to the piece whose id corresponds to the selected piece value', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Board.__Rewire__('Card', Card);


            renderer.render(
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} cards={props.cards} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board">
                    <div key={0} className='lane'>
                        <div key={0} id={0} className={'piece selected'} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${0}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${1}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(0)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${2}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={1} className='lane'>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${3}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${4}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${5}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={2} className='lane'>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${6}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${7}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${8}.png')`, cursor: 'default'}}>
                            <div></div>
                        </div>
                    </div>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        });

    });

    describe('Given a full board', () => {
        let props;
        beforeEach(() => {
            props = {
                validPieces: [],
                selectedPiece: 0,
                cards: new List([
                    new Map({id: 0, owner: 1, name: "Cloud", boardIndex: 0}),
                    new Map({id: 1, owner: 1, name: "Tifa", boardIndex: 1}),
                    new Map({id: 2, owner: 1, name: "Squall", boardIndex: 2}),
                    new Map({id: 3, owner: 1, name: "Cid", boardIndex: 3}),
                    new Map({id: 4, owner: 1, name: "Selfie", boardIndex: 4}),
                    new Map({id: 5, owner: 1, name: "Tidus", boardIndex: 5}),
                    new Map({id: 6, owner: 1, name: "Vivi", boardIndex: 6}),
                    new Map({id: 7, owner: 1, name: "Cat Sith", boardIndex: 7}),
                    new Map({id: 8, owner: 1, name: "Barret", boardIndex: 8})
                ])
            }
        });

        it('should render a card at every piece', () => {

            class Card extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Board.__Rewire__('Card', Card);


            renderer.render(
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} cards={props.cards} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board">
                    <div key={0} className='lane'>
                        <div key={0} id={0} className={'piece selected'} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${0}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(0)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${1}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(1)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${2}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(2)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                    <div key={1} className='lane'>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${3}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(3)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${4}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(4)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${5}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(5)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                    <div key={2} className='lane'>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${6}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(6)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${7}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(7)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('../assets/images/board/board-${8}.png')`, cursor: 'default'}}>
                            <Card card={props.cards.get(8)}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        });

    });

});