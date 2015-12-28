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

    click = () => {
        this.props.nextStep();
        this.props.setHands();
    };

    render() {
        return (
            <div id="step-0">
                <label htmlFor="random-hand">
                    <input type="checkbox" id="random-hand" onChange={this.randomHand}></input>
                    Random Hand
                </label>
                <label htmlFor="two-player">
                    <input type="checkbox" id="two-player" onChange={this.multiplayer}></input>
                    2P
                </label>
                <label htmlFor="hidden-hand">
                    <input type="checkbox" id="hidden-hand" onChange={this.visibleHand}></input>
                    Hide opponent's hand
                </label>
                <button onClick={this.click}> Next step</button>
            </div>
        );
    }
}