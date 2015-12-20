import React from 'react';
import CardSelection from './steps/cardSelection';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as StepActions from './../actions/step';

@connect(state => ({ store: state }))

export default class Game extends React.Component {
  render() {
    let {store, dispatch} = this.props;
    let game = store.game;

    let currentGameStep = null;

    switch(game.step){
      case 0: currentGameStep = (<CardSelection game={game} {...bindActionCreators(StepActions, dispatch)} />); break;
      default: console.log("default"); break;
    }

    return (
      <div id="game">
        {currentGameStep}
      </div>
    );
  }
}
