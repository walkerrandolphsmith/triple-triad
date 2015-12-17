import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ game: state.game }))

export default class Game extends React.Component {
  render() {
    let cardStyle = {
      width: '62px',
      height: '62px',
      background: 'url("/assets/cards.png")'
    }

    return (
      <div id="game">
        Hello world
        <div style={cardStyle}></div>
      </div>
    );
  }
}
