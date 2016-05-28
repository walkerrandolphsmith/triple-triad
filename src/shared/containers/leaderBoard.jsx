import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeaderBoard } from './../components/leaderBoard';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').id
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);