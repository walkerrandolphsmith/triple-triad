import React from 'react';
import Card from './card';
import _ from 'lodash';

export default class Board extends React.Component {

    click(index) {
        this.props.playerTakesTurn(index, true);
    };

    render() {

        let {validPieces, cardHasBeenSelected, board} = this.props;

        let boardStyle = {
            display: 'flex',
            flexDirection: 'column',
            margin: '0px auto'
        };

        let rowStyle = {
            flex: '1',
            display: 'flex'
        };

        let pieceStyle = {
            fontSize: '5em',
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            borderTopWidth: '1px',
            borderLeftWidth: '1px',
            borderTopStyle: 'solid',
            borderLeftStyle: 'solid',
            background: 'grey',
            cursor: 'default'
        };

        let pieces = [];
        for(var i = 0; i < 9; i++){
            let piece  = {
                card: board[i],
                style: pieceStyle,
                clickHandler: function(){}
            };
            if(cardHasBeenSelected && _.contains(validPieces, i)){
                piece.style = _.assign(_.clone(pieceStyle), { cursor: 'pointer' });
                piece.clickHandler = this.click.bind(this, i);
            }
            pieces.push(piece);
        }

        pieces = pieces.map((piece, i) => {
            let card = piece.card ? (<Card id={piece.card.id} name={piece.card.name} owner={piece.card.owner} />) : (<div></div>);
            return (
                <div key={i} id={i} className="piece" onClick={piece.clickHandler} style={piece.style}>{card}</div>
            )
        });

        let rows = _.chunk(pieces, 3).map((group, i)=> {
            return (<div key={i} className='lane' style={rowStyle}>{group}</div>)
        });

        return (
            <div id="board" style={boardStyle}>
                {rows}
            </div>
        );
    }
}