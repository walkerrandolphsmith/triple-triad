import React from 'react';
import Card from './card';
import _ from 'lodash';

export default class Board extends React.Component {

    click(index) {
        this.props.playerTakesTurn(index, true);
    };

    render() {

        let {validPieces, cardIsPlayable, board} = this.props;

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
                card: board[i],
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

            if(cardIsPlayable && _.contains(validPieces, i)){
                piece.style.cursor = 'pointer';
                piece.clickHandler = this.click.bind(this, i);
            }
            pieces.push(piece);
        }

        pieces = pieces.map((piece, i) => {

            let card = (<div></div>);

            if(piece.card){
                let { name, owner } = piece.card;

                const cardStyle = {
                    backgroundImage: `url(assets/images/${name}.png)`,
                    backgroundColor: owner === 2 ? 'red' : 'blue'
                };

                card = (<Card card={piece.card} cardStyle={cardStyle} clickAction={()=>{}} />);
            }

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