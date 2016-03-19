import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';
import KEY_CODE from './../constants/keyCodes';
import App from './../components';

function mapStateToProps(state) {
    return {
        user: state.auth.get('user').get('username'),
        activeRoute: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '/',
        keyCodes: KEY_CODE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
