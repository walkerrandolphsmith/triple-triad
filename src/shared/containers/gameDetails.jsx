import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GameDetails } from './../components';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);