import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
import Board from './../../../src/shared/components/board';
import { board, __RewireAPI__ as boardRewireAPI } from './../../../src/shared/components/board';

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
                board: [

                ]
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
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} board={props.board} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board" style={{ display: 'flex', flexDirection: 'column', margin: '0px auto'}}>
                    <div key={0} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={0} id={0} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${0}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${1}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${2}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={1} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${3}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${4}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${5}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={2} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${6}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${7}.png')`, cursor: 'pointer'}}>
                            <div></div>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${8}.png')`, cursor: 'pointer'}}>
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
                board: [
                    {id: 1, owner: 1, name: "Cloud", boardIndex: 1}
                ]
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
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} board={props.board} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board" style={{ display: 'flex', flexDirection: 'column', margin: '0px auto'}}>
                    <div key={0} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={0} id={0} className={'piece selected'} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${0}.png')`}}>
                            <div></div>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${1}.png')`}}>
                            <Card card={props.board[0]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${2}.png')`}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={1} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${3}.png')`}}>
                            <div></div>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${4}.png')`}}>
                            <div></div>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${5}.png')`}}>
                            <div></div>
                        </div>
                    </div>
                    <div key={2} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${6}.png')`}}>
                            <div></div>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${7}.png')`}}>
                            <div></div>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${8}.png')`}}>
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
                board: [
                    {id: 0, owner: 1, name: "Cloud", boardIndex: 0},
                    {id: 1, owner: 1, name: "Tifa", boardIndex: 1},
                    {id: 2, owner: 1, name: "Squall", boardIndex: 2},
                    {id: 3, owner: 1, name: "Cid", boardIndex: 3},
                    {id: 4, owner: 1, name: "Selfie", boardIndex: 4},
                    {id: 5, owner: 1, name: "Tidus", boardIndex: 5},
                    {id: 6, owner: 1, name: "Vivi", boardIndex: 6},
                    {id: 7, owner: 1, name: "Cat Sith", boardIndex: 7},
                    {id: 8, owner: 1, name: "Barret", boardIndex: 8}
                ]
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
                <Board validPieces={props.validPieces} selectedPiece={props.selectedPiece} board={props.board} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="board" style={{ display: 'flex', flexDirection: 'column', margin: '0px auto'}}>
                    <div key={0} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={0} id={0} className={'piece selected'} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${0}.png')`}}>
                            <Card card={props.board[0]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={1} id={1} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${1}.png')`}}>
                            <Card card={props.board[1]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={2} id={2} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${2}.png')`}}>
                            <Card card={props.board[2]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                    <div key={1} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={3} id={3} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${3}.png')`}}>
                            <Card card={props.board[3]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={4} id={4} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${4}.png')`}}>
                            <Card card={props.board[4]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={5} id={5} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${5}.png')`}}>
                            <Card card={props.board[5]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                    <div key={2} className='lane' style={{ flex: '1', display: 'flex' }}>
                        <div key={6} id={6} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${6}.png')`}}>
                            <Card card={props.board[6]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={7} id={7} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${7}.png')`}}>
                            <Card card={props.board[7]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                        <div key={8} id={8} className={'piece '} onClick={() => {}} style={{backgroundImage: `url('assets/images/board/board-${8}.png')`}}>
                            <Card card={props.board[8]}
                                clickAction={() => {}}>
                            </Card>
                        </div>
                    </div>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        });

    });

});