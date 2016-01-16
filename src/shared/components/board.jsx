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
                    fontSize: '5em',
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundImage: `url('assets/images/board/board-${i}.png')`,
                    borderTopWidth: '1px',
                    borderLeftWidth: '1px',
                    borderTopStyle: 'solid',
                    borderLeftStyle: 'solid',
                    cursor: 'default'
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

                let backgroundColor = owner === 1 ? 'linear-gradient( 45deg, white, #608FC6 )' : 'linear-gradient( 45deg, white, #CC181E )';

                const cardStyle = {
                    backgroundImage: `url(assets/images/cards/${name}.png), ${backgroundColor}`
                };

                card = (<Card card={piece.card} cardStyle={cardStyle} clickAction={()=>{}} />);
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