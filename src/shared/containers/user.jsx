import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';

import React from 'react';

class User extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.id);
    }

    render() {
        let { id, username, verified } = this.props;
        let v = verified ? 'true' : 'false';
        return (
            <div id="user">
                <div>
                    <img heigth="150px" width="150px" src="assets/images/default-user.png"/>
                    <div id="username">{username}</div>

                    <div>IsVerfied: {v} </div>

                    <button className="btn btn-next" onClick={this.props.signOut}>SignOut</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        verified: state.user.get('user').get('verified')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
