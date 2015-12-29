import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StepActions from './../action-creators/step';

import React from 'react';
import Cards from './../components/cards';

class SettingsSelection extends React.Component {

    randomHand = (event) => {
        this.props.updateSettings("randomHand", event.target.checked);
    };

    multiplayer = (event) => {
        this.props.updateSettings("multiplayer", event.target.checked);
    };

    visibleHand = (event) => {
        this.props.updateSettings("visibleHand", event.target.checked);
    };

    click = () => {
        this.props.nextStep();
        this.props.setHands();
    };

    render() {
        return (
            <div id="step-0">
                <label htmlFor="random-hand">
                    <input type="checkbox" id="random-hand" onChange={this.randomHand.bind(this)}></input>
                    Random Hand
                </label>
                <label htmlFor="two-player">
                    <input type="checkbox" id="two-player" onChange={this.multiplayer.bind(this)}></input>
                    2P
                </label>
                <label htmlFor="hidden-hand">
                    <input type="checkbox" id="hidden-hand" onChange={this.visibleHand.bind(this)}></input>
                    Hide opponent's hand
                </label>
                <button onClick={this.click.bind(this)}> Next step</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(StepActions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsSelection);