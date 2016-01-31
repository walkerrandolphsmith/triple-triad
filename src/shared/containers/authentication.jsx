import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

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
                let redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(pushPath(null, `/login?next=${redirectAfterLogin}`))
            }
        }

        render() {
            return (
                <div>
                {
                    this.props.isAuthenticated ? <Component {...this.props} /> : null
                }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.get('user').get('id') ? true : false
    });

    return connect(mapStateToProps)(AuthenticationComponent);
}