import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import * as Actions from './../actions/';

export default function(Component) {

    class AuthenticationComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {

            if(!this.props.isAuthenticated) {
                this.props.push(`/sigin`)
            }
        }

        render() {
            return (
                <Component {...this.props} />
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.get('user').get('id') ? true : false
    });

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({...Actions, push: push}, dispatch);
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationComponent);
}