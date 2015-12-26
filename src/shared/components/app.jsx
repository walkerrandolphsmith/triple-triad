import React from 'react';
import Game from './game';

export default class App extends React.Component {
  render(){
    return (<div>
        <Game />
      {this.props.children}
    </div>);
  }
}
