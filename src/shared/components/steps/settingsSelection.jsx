import React from 'react';
import Cards from './../cards';

export default class SettingsSelection extends React.Component {

    randomHand = (event) => {
        this.props.updateSettings("randomHand", event.target.checked);
    };

    multiplayer = (event) => {
        this.props.updateSettings("multiplayer", event.target.checked);
    };

    visibleHand = (event) => {
        this.props.updateSettings("visibleHand", event.target.checked);
    };

    render() {
        return (
            <div id="step-0">
                <label htmlFor="random-hand"><input type="checkbox" id="random-hand" onChange={this.randomHand}></input> Random Hand</label>
                <label htmlFor="two-player"><input type="checkbox" id="two-player" onChange={this.multiplayer}></input>2P</label>
                <label htmlFor="hidden-hand"><input type="checkbox" id="hidden-hand" onChange={this.visibleHand}></input>See opponent hand</label>
                <button onClick={this.props.nextStep}> Next step</button>
            </div>
        );
    }
}