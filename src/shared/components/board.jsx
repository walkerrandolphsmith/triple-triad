import React from 'react';
import Card from './card';
import _ from 'lodash';

export default class Board extends React.Component {

    click = (index) => {
        this.props.selectPiece(index);
        this.props.applyRules(index);
        this.props.startAiTurn();
        this.props.aiTurn(this.props.validPieces);
        this.props.endAiTurn();
    };

    render() {

        let {validPieces, cardHasBeenSelected, board} = this.props;

        let boardStyle = {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            height: '381px',
            margin: '0px auto'
        };

        let rowStyle = {
            flex: '1',
            display: 'flex'
        };

        let pieceStyle = {
            width: '100px',
            height: '127px',
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
            let cardAtPiece = board[i];
            let card = cardAtPiece ? (<Card index={i} name={cardAtPiece.name} owner={cardAtPiece.owner} />) : (<div></div>);

            if(cardHasBeenSelected && _.contains(validPieces, i)){
                let validPieceStyle = _.assign(_.clone(pieceStyle), { cursor: 'pointer' });
                pieces.push(
                    <div key={i} id={i} onClick={this.click.bind(this, i)} style={validPieceStyle}>{card}</div>
                )
            }else{
                pieces.push(
                    <div key={i} id={i} style={pieceStyle}>{card}</div>
                )
            }

        }

        let rows = _.chunk(pieces, 3).map((group, i)=> {
            return (<div key={i} className='row' style={rowStyle}>{group}</div>)
        });

        return (
            <div id="board" style={boardStyle}>
                {rows}
            </div>
        );
    }
}