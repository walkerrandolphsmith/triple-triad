import React from 'react';
import Cards from './../cards';

export default class CardSelection extends React.Component {
    render() {

        let {deck, hand, ownerType, handSelected, removeCard, addCard, nextStep} = this.props;
        let addCardHandler = handSelected ? function(){} : addCard;

        return (
            <div id="step-1">
                <Cards cards={deck} showBack={false} owner={ownerType.none} clickAction={addCardHandler} />
                <Cards cards={hand} showBack={false} owner={ownerType.player} clickAction={removeCard} />
                <button disabled={!handSelected} onClick={nextStep}> Next step</button>
            </div>
        );
    }
}