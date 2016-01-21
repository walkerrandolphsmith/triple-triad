import React from 'react';
import { Map } from 'immutable';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';

import Settings from './../../../src/shared/components/settings';

expect.extend(expectJSX);

describe('SETTINGS component', () => {

    let renderer;
    beforeEach(() => {
        renderer = createRenderer();
    });

    describe('Given a form with every setting true', () => {
        let props;
        beforeEach(() => {
            props = {
                settings: new Map({
                    randomHand: true,
                    multiplayer: true,
                    visibleHand: true
                }),
                updateRoute: () => {}
            }
        });

        it('should render a form where every checkbox is checked', () => {
            renderer.render(
                <Settings settings={props.settings} updateRoute={props.updateRoute}/>
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="settings-selection">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="settings">
                                <div className="control-group">
                                    <input type="checkbox" id="random-hand" checked={true}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="random-hand"></label>
                                    <label className="text" htmlFor="random-hand">Random Hand</label>
                                </div>
                                <div className="control-group">
                                    <input type="checkbox" id="two-player" checked={true}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="two-player"></label>
                                    <label className="text" htmlFor="two-player">2 Player</label>
                                </div>
                                <div className="control-group">
                                    <input type="checkbox" id="hidden-hand" checked={true}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="hidden-hand"></label>
                                    <label className="text" htmlFor="hidden-hand">Hide opponent's hand</label>
                                </div>
                            </div>
                            <button className="btn btn-next" onClick={props.updateRoute}> Next step</button>
                        </div>
                    </div>
                </div>
            expect(actualElement).toEqualJSX(expectedElement);
        });
    });

    describe('Given a form with every setting false', () => {
        let props;
        beforeEach(() => {
            props = {
                settings: new Map({
                    randomHand: false,
                    multiplayer: false,
                    visibleHand: false
                }),
                updateRoute: () => {}
            }
        });

        it('should render a form where every checkbox is not checked', () => {
            renderer.render(
                <Settings settings={props.settings} updateRoute={props.updateRoute}/>
            );
            const actualElement = renderer.getRenderOutput();
            const expectedElement =
                <div id="settings-selection">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="settings">
                                <div className="control-group">
                                    <input type="checkbox" id="random-hand" checked={false}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="random-hand"></label>
                                    <label className="text" htmlFor="random-hand">Random Hand</label>
                                </div>
                                <div className="control-group">
                                    <input type="checkbox" id="two-player" checked={false}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="two-player"></label>
                                    <label className="text" htmlFor="two-player">2 Player</label>
                                </div>
                                <div className="control-group">
                                    <input type="checkbox" id="hidden-hand" checked={false}
                                        onChange={() => {}}
                                        onFocus={() => {}}>
                                    </input>
                                    <label htmlFor="hidden-hand"></label>
                                    <label className="text" htmlFor="hidden-hand">Hide opponent's hand</label>
                                </div>
                            </div>
                            <button className="btn btn-next" onClick={props.updateRoute}> Next step</button>
                        </div>
                    </div>
                </div>
            expect(actualElement).toEqualJSX(expectedElement);
        })

    });

});