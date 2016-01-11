import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

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
        this.props.setHands();
        this.props.updateRoute();
    };

    render() {
        return (
            <div id="settings-selection" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="control-group">
                            <input type="checkbox" id="random-hand" onChange={this.randomHand.bind(this)}></input>
                            <label htmlFor="random-hand"></label>
                            <label className="text" htmlFor="random-hand">Random Hand</label>
                        </div>
                        <div className="control-group">
                            <input type="checkbox" id="two-player" onChange={this.multiplayer.bind(this)}></input>
                            <label htmlFor="two-player"></label>
                            <label className="text" htmlFor="two-player">2 Player</label>
                        </div>
                        <div className="control-group">
                            <input type="checkbox" id="hidden-hand" onChange={this.visibleHand.bind(this)}></input>
                            <label htmlFor="hidden-hand"></label>
                            <label className="text" htmlFor="hidden-hand">Hide opponent's hand</label>
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