import React from 'react';
import _ from 'lodash';

export default class Board extends React.Component {

    click = (index) => {
        debugger;
    };

    render() {

        let {validPieces} = this.props;

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
            alignItems: 'center',
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

            let clickAction = null;

            if(_.contains(validPieces, i)){
                clickAction = this.click;
                pieceStyle["cursor"] = 'pointer';
            }else{
                clickAction = function(){};
            }

            pieces.push(
                <div key={i} id={i} onClick={clickAction.bind(i)} style={pieceStyle}></div>
            )
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