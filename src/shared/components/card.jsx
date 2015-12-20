import React from 'react';

export default class Card extends React.Component {
    render() {
        let {key, name, owner} = this.props;

        const opponentClass = owner === 1 ? 'opponent' : '';
        const cardClass = `card ${opponentClass}`;

        return (
            <div key={key} className={cardClass}>
                <img src={`assets/images/${name}.png`} alt={name} />
            </div>
        )
    }
}