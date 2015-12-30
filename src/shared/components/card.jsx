import React from 'react';

export default class Card extends React.Component {

    click() {
        let {clickAction, id} = this.props;
        clickAction(id);
    };

    render() {
        let {id, name, owner, showBack} = this.props;

        name = showBack ? 'back' : name;

        const cardWrapperStyle = {
            display: 'inline'
        };

        const cardStyle = {
            backgroundImage: `url(assets/images/${name}.png)`,
            backgroundColor: owner === 2 ? 'red' : 'blue',
            width: '100px',
            height: '127px'
        };

        return (
            <div key={id} style={cardWrapperStyle} onClick={this.click.bind(this)}>
                <div style={cardStyle}></div>
            </div>
        )
    }
}