import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    return (
      <div id="game">
        Hello world
      </div>
    );
  }
}
