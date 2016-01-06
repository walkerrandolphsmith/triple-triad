import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../action-creators/';

import React from 'react';

class SettingsSelection extends React.Component {

    randomHand(event) {
        this.props.updateSettings("randomHand", event.target.checked);
    };

    multiplayer(event) {
        this.props.updateSettings("multiplayer", event.target.checked);
    };

    visibleHand(event) {
        this.props.updateSettings("visibleHand", event.target.checked);
    };

    click() {
        this.props.nextStep();
        this.props.setHands();
    };

    render() {
        return (
            <div id="settings-selection" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="control-group">
                            <label htmlFor="random-hand">
                                <input type="checkbox" id="random-hand" onChange={this.randomHand.bind(this)}></input>
                                Random Hand
                            </label>
                        </div>
                        <div className="control-group">
                            <label htmlFor="two-player">
                                <input type="checkbox" id="two-player" onChange={this.multiplayer.bind(this)}></input>
                                2P
                            </label>
                        </div>
                        <div className="control-group">
                            <label htmlFor="hidden-hand">
                                <input type="checkbox" id="hidden-hand" onChange={this.visibleHand.bind(this)}></input>
                                Hide opponent's hand
                            </label>
                        </div>
                        <button className="btn btn-next" onClick={this.click.bind(this)}> Next step</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsSelection);