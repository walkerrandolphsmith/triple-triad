import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Authentication } from './../components';
import { push } from 'react-router-redux';

export default function(Component) {

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.get('user').get('id') ? true : false,
        Component: Component
    });

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({push: push}, dispatch);
    };

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}