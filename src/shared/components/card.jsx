import React from 'react';

export default class Card extends React.Component {

    click = () => {
        let {clickAction, id} = this.props;
        clickAction(id);
    };

    render() {
        let {id, name, owner, showBack} = this.props;

        const opponentClass = owner === 2 ? 'opponent' : '';
        const cardClass = `card ${opponentClass}`;

        name = showBack ? 'back' : name;

        return (
            <div key={id} className={cardClass} onClick={this.click}>
                <img src={`assets/images/${name}.png`} alt={name} />
            </div>
        )
    }
}