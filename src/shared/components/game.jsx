import React from 'react';
import SettingsSelection from './steps/settingsSelection';
import CardSelection from './steps/cardSelection';
import Round from './steps/round';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scoreSelector, validPiecesSelector } from './../selectors/scoreSelector';
import { stepCompleteSelector } from './../selectors/stepCompleteSelector';

import * as StepActions from './../actions/step';

@connect((state) => ({
  game: state.game,
  score: scoreSelector(state.game),
  handSelected:stepCompleteSelector(state.game),
  validPieces: validPiecesSelector(state.game)
}))

export default class Game extends React.Component {
  render() {
    let {game, score, handSelected, validPieces, dispatch} = this.props;

    let currentGameStep = null;

    switch(game.step){
      case 0: currentGameStep = (<SettingsSelection settings={game.settings} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 1: currentGameStep = (<CardSelection game={game} handSelected={handSelected} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 2: currentGameStep = (<Round game={game} score={score} validPieces={validPieces} {...bindActionCreators(StepActions, dispatch)} />); break;
      default: console.log("default"); break;
    }

    return (
      <div id="game">
        {currentGameStep}
      </div>
    );
  }
}
