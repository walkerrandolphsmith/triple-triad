import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toJS } from 'immutable';
import * as Actions from './../actions/';

import React from 'react';

class SettingsSelection extends React.Component {

    constructor(props){
        super(props);

        let { randomHand, multiplayer, visibleHand } = props.settings;

        this.state = {
            randomHand: randomHand,
            multiplayer: multiplayer,
            visibleHand: visibleHand
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps !=  this.state) {

            let { randomHand, multiplayer, visibleHand } = newProps.settings;

            this.setState({
                randomHand: randomHand,
                multiplayer: multiplayer,
                visibleHand: visibleHand
            });
        }
    }

    update(setting, event) {
        this.props.updateSettings(setting);
    }


    render() {

        let { randomHand, multiplayer, visibleHand } = this.state;

        return (
            <div id="settings-selection" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="settings">
                            <div className="control-group">
                                <input type="checkbox" id="random-hand" checked={randomHand}
                                    onChange={this.update.bind(this, 'randomHand')}>
                                </input>
                                <label htmlFor="random-hand"></label>
                                <label className="text" htmlFor="random-hand">Random Hand</label>
                            </div>
                            <div className="control-group">
                                <input type="checkbox" id="two-player" checked={multiplayer}
                                    onChange={this.update.bind(this, 'multiplayer')}>
                                </input>
                                <label htmlFor="two-player"></label>
                                <label className="text" htmlFor="two-player">2 Player</label>
                            </div>
                            <div className="control-group">
                                <input type="checkbox" id="hidden-hand" checked={visibleHand}
                                    onChange={this.update.bind(this, 'visibleHand')}>
                                </input>
                                <label htmlFor="hidden-hand"></label>
                                <label className="text" htmlFor="hidden-hand">Hide opponent's hand</label>
                            </div>
                        </div>
                        <button className="btn btn-next" onClick={this.props.updateRoute}> Next step</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsSelection);