import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GameDetails } from './../components';
import WINNER_TYPE from './../constants/winner';
import { scoreSelector, winnerSelector, currentGameSelector } from '../ducks/game';

function mapStateToProps(state) {
    return {
        game: currentGameSelector(state),
        score: scoreSelector(state),
        winner: winnerSelector(state),
        winnerType: WINNER_TYPE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);