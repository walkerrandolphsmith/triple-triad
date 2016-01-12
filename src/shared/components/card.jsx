import React from 'react';
export default class Card extends React.Component {

    render() {

        let { card, classes, cardStyle, clickAction } = this.props;
        classes = classes ? classes.join(' ') : "";
        let className = `card-wrapper ${classes}`;
        return (
            <div className={className} onClick={clickAction}>
                <div className='card' style={cardStyle}></div>
            </div>
        );
    }
}