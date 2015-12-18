import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ store: state }))

export default class Game extends React.Component {
  render() {
    let {game} = this.props.store;

    return (
      <div id="game">

      </div>
    );
  }
}
