import React from 'react';
import Cards from './../cards';

export default class CardSelection extends React.Component {
    render() {

        let {deck, hand, handSelected, removeCard, addCard, nextStep} = this.props;
        let addCardHandler = handSelected ? function(){} : addCard;

        return (
            <div id="step-1">
                <Cards cards={deck} showBack={false} owner={0} clickAction={addCardHandler} />
                <Cards cards={hand} showBack={false} owner={1} clickAction={removeCard} />
                <button disabled={!handSelected} onClick={nextStep}> Next step</button>
            </div>
        );
    }
}