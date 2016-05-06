import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KEY_CODE from './../constants/keyCodes';
import { App } from './../components';
import { handleDown, handleEnter, handleEscape, handleLeft, handleRight, handleUp } from './../ducks/game';

function mapStateToProps(state) {
    return {
        user: state.auth.get('user').get('username'),
        activeRoute: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '/',
        keyCodes: KEY_CODE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleDown, handleEnter, handleEscape, handleLeft, handleRight, handleUp },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
