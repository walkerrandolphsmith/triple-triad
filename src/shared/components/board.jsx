import React from 'react';
import { Card } from './card';

export class Board extends React.Component {

    click(index) {
        this.props.completeTurn(index, true);
    };

    render() {

        let {validPieces, selectedPiece, cards} = this.props;

        let board = [0,1,2,3,4,5,6,7,8].map(i => {
            let isValidPiece = validPieces.indexOf(i) > -1;
            return {
                card: cards.find(card => card.get('boardIndex') === i),
                style: {
                    backgroundImage: `url('../assets/images/board/board-${i}.png')`,
                    cursor: isValidPiece ? 'pointer' : 'default'
                },
                clickHandler: isValidPiece ? this.click.bind(this, i) : function(){}
            };
        }).map((piece, i) => {
            let card = piece.card ? (<Card card={piece.card} clickAction={()=>{}} />) : (<div></div>);
            let className = `piece ${i === selectedPiece ? 'selected' : ''}`;
            return (<div key={i} id={i} className={className} onClick={piece.clickHandler} style={piece.style}>{card}</div>)
        }).reduce((board, piece, i) => {
            board.lane.push(piece);
            if(i % 3 === 2) {
                board.lanes.push(<div key={i} className='lane'>{board.lane}</div>);
                board.lane = [];
            }
            return board;
        }, {lanes: [], lane: []});

        return (
            <div id="board">
                {board.lanes}
            </div>
        );
    }
}