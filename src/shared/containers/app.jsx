import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { App } from './../components';
import KEY_CODE from './../constants/keyCodes';
import { handleDown, handleEnter, handleEscape, handleLeft, handleRight, handleUp } from './../ducks/game';

class Root extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <App {...this.props}></App>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.get('user'),
        activeRoute: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '/',
        keyCodes: KEY_CODE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleDown, handleEnter, handleEscape, handleLeft, handleRight, handleUp },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
