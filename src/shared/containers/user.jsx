import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';

import React from 'react';

export default class User extends React.Component {

    render() {
        let { user } = this.props;

        return (
            <div id="user">
                <div>
                    <img heigth="150px" width="150px" src="assets/images/default-user.png"/>
                    <div id="username">{user}</div>

                    <button className="btn btn-next" onClick={this.props.signOut}>SignOut</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.get('user').get('username')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
