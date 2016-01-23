import React from 'react';
import { Map, List } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
import Round from './../../../src/shared/components/round';
import { round, __RewireAPI__ as roundRewireAPI } from './../../../src/shared/components/round';

expect.extend(expectJSX);

describe('ROUND component', () => {

    let renderer;
    beforeEach(() => {
        renderer = createRenderer();

    });

    describe('Given a round in progress the game over banner should be hidden', () => {
        let props, handStyles, bannerStyle, bannerScrimStyle, phrase;
        beforeEach(() => {
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
                validPieces: [0,1,2,3,4,5,6,7,8],
                score: {
                    blue: 5,
                    red: 5
                },
                winner: 1,
                selectCard: () => {},
                selectedPieceByClick: () => {},
                updateRoute: () => {}
            };

            handStyles = {
                visibility: 'visible'
            };

            bannerStyle = {
                display: 'none'
            };

            bannerScrimStyle = {

            };

            phrase = "";
        });

        it('should render a the first row with visibility and second row has no display', () => {

            class Board extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            class Hand extends React.Component {
                render() {
                    return (<div></div>)
                }
            }
            Round.__Rewire__('Board', Board);
            Round.__Rewire__('Hand', Hand);
            Round.__Rewire__('WINNER', {
                NONE: 1,
                TIE: 2,
                BLUE: 3,
                RED: 4
            });


            renderer.render(
                <Round game={props.game} board={props.board} hand={props.hand} opponentHand={props.opponentHand} settings={props.settings} validPieces={props.validPieces} score={props.score} winner={props.winner}
                    selectCard={props.selectCard} selectedPieceByClick={props.selectedPieceByClick} updateRoute={props.updateRoute} />
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
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
                                        <button className="btn btn-next" onClick={props.updateRoute}>Play again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                    </div>
                </div>

            expect(actualElement).toEqualJSX(expectedElement);
        });

    });

});