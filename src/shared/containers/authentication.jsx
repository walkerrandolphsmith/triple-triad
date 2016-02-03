import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath } from 'redux-simple-router';
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
                this.props.pushPath(null, `/sigin`)
            }
        }

        render() {
            return (
                <div>
                {
                    this.props.isAuthenticated ? (
                        <div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <button onClick={this.props.signOut}> sign out </button>
                                </div>
                            </div>
                            <Component {...this.props} />
                        </div>
                    ): null
                }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.get('user').get('id') ? true : false
    });

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({...Actions, pushPath: pushPath}, dispatch);
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationComponent);
}