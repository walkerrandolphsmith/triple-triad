import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Verify } from './../components';
import { verifyEmail } from '../ducks/verifyEmail';

function mapStateToProps(state) {
    return {
        token: state.routing.locationBeforeTransitions.pathname.split('/verify/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ verifyEmail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify)