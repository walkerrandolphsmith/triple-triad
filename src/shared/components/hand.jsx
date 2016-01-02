import React from 'react';
import Cards from './cards';

export default class Hand extends React.Component {
    render() {
        let {score, hand, showBack, clickAction} = this.props;

        return (
            <div className="hand">
                <div className="score">{score}</div>
                <Cards cards={hand} showBack={false} clickAction={clickAction}/>
            </div>
        );
    }
}