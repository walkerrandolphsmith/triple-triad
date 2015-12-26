import React from 'react';
import SettingsSelection from './steps/settingsSelection';
import CardSelection from './steps/cardSelection';
import Round from './steps/round';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scoreSelector } from './../selectors/scoreSelector';

import * as StepActions from './../actions/step';

@connect((store) => ({game: store.game, score: scoreSelector(store.game)}))

export default class Game extends React.Component {
  render() {
    let {game, score, dispatch} = this.props;

    let currentGameStep = null;

    switch(game.step){
      case 0: currentGameStep = (<SettingsSelection game={game} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 1: currentGameStep = (<CardSelection game={game} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 2: currentGameStep = (<Round game={game} score={score} {...bindActionCreators(StepActions, dispatch)} />); break;
      default: console.log("default"); break;
    }

    return (
      <div id="game">
        {currentGameStep}
      </div>
    );
  }
}
