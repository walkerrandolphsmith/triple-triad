import React from 'react';

export default class Card extends React.Component {

    click = () => {
        let {clickAction, index} = this.props;
        clickAction(index);
    };

    render() {
        let {index, name, owner} = this.props;

        const opponentClass = owner === 1 ? 'opponent' : '';
        const cardClass = `card ${opponentClass}`;

        return (
            <div key={index} className={cardClass} onClick={this.click}>
                <img src={`assets/images/${name}.png`} alt={name} />
            </div>
        )
    }
}