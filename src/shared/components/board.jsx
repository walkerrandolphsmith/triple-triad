import React from 'react';
import Card from './card';
import _ from 'lodash';

export default class Board extends React.Component {

    click(index) {
        this.props.selectedPieceByClick(index);
    };

    render() {

        let {validPieces, selectedPiece, board} = this.props;

        let boardStyle = {
            display: 'flex',
            flexDirection: 'column',
            margin: '0px auto'
        };

        let rowStyle = {
            flex: '1',
            display: 'flex'
        };

        let pieces = [];
        for(var i = 0; i < 9; i++){
            let piece  = {
                card: board.find(card => card.boardIndex === i),
                style: {
                    backgroundImage: `url('assets/images/board/board-${i}.png')`
                },
                clickHandler: function(){}
            };

            if(_.contains(validPieces, i)){
                piece.clickHandler = this.click.bind(this, i);
                piece.style.cursor = 'pointer';
            }
            pieces.push(piece);
        }

        pieces = pieces.map((piece, i) => {

            let card = (<div></div>);

            if(piece.card){
                let { name, owner } = piece.card;

                card = (<Card card={piece.card} clickAction={()=>{}} />);
            }

            let className = `piece ${i === selectedPiece ? 'selected' : ''}`;

            return (
                <div key={i} id={i} className={className} onClick={piece.clickHandler} style={piece.style}>{card}</div>
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