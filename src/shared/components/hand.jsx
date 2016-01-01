import React from 'react';
import Cards from './cards';

export default class Cards extends React.Component {
    render() {
        let {score, hand, showBack, owner, clickAction} = this.props;

        return (
            <div className="hand">
                <div className="score">{score}</div>
                <Cards cards={hand} showBack={false} owner={owner} clickAction={clickAction}/>
            </div>
        );
    }
}