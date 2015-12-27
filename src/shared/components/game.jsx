import React from 'react';
import SettingsSelection from './steps/settingsSelection';
import CardSelection from './steps/cardSelection';
import Round from './steps/round';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scoreSelectorCreator, validPiecesSelectorCreator, winnerSelectorCreator, stepCompleteSelectorCreator } from './../selectors/index';

import * as StepActions from './../action-creators/step';

@connect((state) => ({
  game: state.game,
  settings: state.settings,
  score: scoreSelectorCreator(state.game),
  handSelected: stepCompleteSelectorCreator(state.game),
  validPieces: validPiecesSelectorCreator(state.game),
  winner: winnerSelectorCreator(state.game)
}))

export default class Game extends React.Component {
  render() {
    let {game, settings, score, handSelected, validPieces, winner, dispatch} = this.props;

    let currentGameStep = null;

    switch(game.step){
      case 0: currentGameStep = (<SettingsSelection settings={settings} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 1: currentGameStep = (<CardSelection deck={game.deck} hand={game.hand} handSelected={handSelected} {...bindActionCreators(StepActions, dispatch)} />); break;
      case 2: currentGameStep = (<Round game={game} settings={settings} score={score} validPieces={validPieces} winner={winner} {...bindActionCreators(StepActions, dispatch)} />); break;
      default: console.log("default"); break;
    }

    return (
      <div id="game">
        {currentGameStep}
      </div>
    );
  }
}
