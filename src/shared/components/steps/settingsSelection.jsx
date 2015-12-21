import React from 'react';
import Cards from './../cards';

export default class SettingsSelection extends React.Component {
    render() {
        return (
            <div id="step-0">
                <label for="random-hand"><input type="checkbox" id="random-hand"></input> Random Hand</label>
                <label for="two-player"><input type="checkbox" id="two-player"></input>2P</label>
                <label for="hidden-hand"><input type="checkbox" id="hidden-hand"></input>See opponent hand</label>
                <button onClick={this.props.nextStep}> Next step</button>
            </div>
        );
    }
}