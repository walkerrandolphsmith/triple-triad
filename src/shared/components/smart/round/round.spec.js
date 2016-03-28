import React from 'react';
import { Map, List } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createRenderer } from 'react-addons-test-utils';
import { Round, __RewireAPI__ } from './round';

expect.extend(expectJSX);

describe('ROUND component', () => {
    let renderer;
    let props;
    let handStyles;
    let bannerStyle;
    let bannerScrimStyle;
    let phrase;
    beforeEach(() => {
        renderer = createRenderer();
        props = {
            game: new Map({
                selectedCard: 0
            }),
            board: new List([

            ]),
            hand: new List([

            ]),
            opponentHand: new List([

            ]),
            settings: new Map({
                visibleHand: true
            }),
            validPieces: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            score: {
                blue: 5,
                red: 5
            },
            winner: 1,
            winnerType: {
                NONE: 1,
                TIE: 2,
                BLUE: 3,
                RED: 4
            },
            selectCard: () => {},
            selectedPieceByClick: () => {},
            endPhase: () => {}
        };

        handStyles = {};
        bannerStyle = {};
        bannerScrimStyle = {};
        phrase = '';
    });

    describe('Given a round with no winner', () => {
        beforeEach(() => {
            props.winner = 1;
            handStyles.visibility = 'visible';
            bannerStyle.display = 'none';
            phrase = '';
        });

        it('should render a the first row with visibility and second row has no display', () => {
            class Board extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            class Hand extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            __RewireAPI__.__Rewire__('Board', Board);
            __RewireAPI__.__Rewire__('Hand', Hand);
            renderer.render(
                <Round {...props} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div id="round">
                    <div className="row">
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.blue} cards={props.hand} selectedCard={props.game.get('selectedCard')} showBack={false} clickAction={props.selectCard} />
                        </div>

                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <Board cards={props.board} validPieces={props.validPieces} selectedPiece={props.game.get('selectedPiece')} selectedPieceByClick={props.selectedPieceByClick} />
                        </div>

                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.red} cards={props.opponentHand} selectedCard={props.game.get('selectedCard')} showBack={props.settings.get('visibleHand')} clickAction={() => {}} />
                        </div>
                    </div>
                    <div style={bannerStyle}>
                        <div id="banner-inner" className="row">
                            <div className="col-md-12">
                                <div className="results row">
                                    <div className="col-md-1">{props.score.blue}</div>
                                    <div className="col-md-10">{phrase}</div>
                                    <div className="col-md-1">{props.score.red}</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-main" onClick={props.endPhase}>Play again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                    </div>
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given a round with a tie', () => {
        beforeEach(() => {
            props.winner = 2;
            handStyles.visibility = 'hidden';
            bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #5d9634, #5d9634 10px, #538c2b 10px, #538c2b 20px)';
            phrase = 'Tie';
        });

        it('should render a the first row with visibility and second row has no display', () => {
            class Board extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            class Hand extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            __RewireAPI__.__Rewire__('Board', Board);
            __RewireAPI__.__Rewire__('Hand', Hand);
            renderer.render(
                <Round {...props} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div id="round">
                    <div className="row">
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.blue} cards={props.hand} selectedCard={props.game.get('selectedCard')} showBack={false} clickAction={props.selectCard} />
                        </div>

                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <Board cards={props.board} validPieces={props.validPieces} selectedPiece={props.game.get('selectedPiece')} selectedPieceByClick={props.selectedPieceByClick} />
                        </div>

                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.red} cards={props.opponentHand} selectedCard={props.game.get('selectedCard')} showBack={props.settings.get('visibleHand')} clickAction={() => {}} />
                        </div>
                    </div>
                    <div style={bannerStyle}>
                        <div id="banner-inner" className="row">
                            <div className="col-md-12">
                                <div className="results row">
                                    <div className="col-md-1">{props.score.blue}</div>
                                    <div className="col-md-10">{phrase}</div>
                                    <div className="col-md-1">{props.score.red}</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-main" onClick={props.endPhase}>Play again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                    </div>
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given a round in over and player won', () => {
        beforeEach(() => {
            props.winner = 3;
            handStyles.visibility = 'hidden';
            bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';
            phrase = 'Player 1';
        });

        it('should render a the first row with visibility and second row has no display', () => {
            class Board extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            class Hand extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            __RewireAPI__.__Rewire__('Board', Board);
            __RewireAPI__.__Rewire__('Hand', Hand);
            renderer.render(
                <Round {...props} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div id="round">
                    <div className="row">
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.blue} cards={props.hand} selectedCard={props.game.get('selectedCard')} showBack={false} clickAction={props.selectCard} />
                        </div>

                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <Board cards={props.board} validPieces={props.validPieces} selectedPiece={props.game.get('selectedPiece')} selectedPieceByClick={props.selectedPieceByClick} />
                        </div>

                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.red} cards={props.opponentHand} selectedCard={props.game.get('selectedCard')} showBack={props.settings.get('visibleHand')} clickAction={() => {}} />
                        </div>
                    </div>
                    <div style={bannerStyle}>
                        <div id="banner-inner" className="row">
                            <div className="col-md-12">
                                <div className="results row">
                                    <div className="col-md-1">{props.score.blue}</div>
                                    <div className="col-md-10">{phrase}</div>
                                    <div className="col-md-1">{props.score.red}</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-main" onClick={props.endPhase}>Play again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                    </div>
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given a round in over and opponent won', () => {
        beforeEach(() => {
            props.winner = 4;
            handStyles.visibility = 'hidden';
            bannerScrimStyle.background = 'repeating-linear-gradient(45deg, red, red 10px, #FF2850 10px, #FF2850 20px)';
            phrase = 'Player 2';
        });

        it('should render a the first row with visibility and second row has no display', () => {
            class Board extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            class Hand extends React.Component {
                render() {
                    return (<div></div>);
                }
            }
            __RewireAPI__.__Rewire__('Board', Board);
            __RewireAPI__.__Rewire__('Hand', Hand);
            renderer.render(
                <Round {...props} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement = (
                <div id="round">
                    <div className="row">
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.blue} cards={props.hand} selectedCard={props.game.get('selectedCard')} showBack={false} clickAction={props.selectCard} />
                        </div>

                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <Board cards={props.board} validPieces={props.validPieces} selectedPiece={props.game.get('selectedPiece')} selectedPieceByClick={props.selectedPieceByClick} />
                        </div>

                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                            <Hand score={props.score.red} cards={props.opponentHand} selectedCard={props.game.get('selectedCard')} showBack={props.settings.get('visibleHand')} clickAction={() => {}} />
                        </div>
                    </div>
                    <div style={bannerStyle}>
                        <div id="banner-inner" className="row">
                            <div className="col-md-12">
                                <div className="results row">
                                    <div className="col-md-1">{props.score.blue}</div>
                                    <div className="col-md-10">{phrase}</div>
                                    <div className="col-md-1">{props.score.red}</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-main" onClick={props.endPhase}>Play again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                    </div>
                </div>
            );
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });
});