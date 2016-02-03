import React from 'react';
import { Link } from 'react-router'

export default class Navigation extends React.Component {

    render() {
        let { user, signOut } = this.props;
        console.log(user);
        let userLink = user
            ? (<li><a><img src="assets/images/default-user.png"/><span>{user}</span></a></li>)
            : (<li></li>);

        let signLink = user
            ? (<li><a onClick={signOut}>SignOut</a></li>)
            : (<li><Link to="/signin">SignIn</Link></li>);

        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <li>
                            <Link to="/" className="navbar-brand"></Link>
                        </li>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">

                        <ul className="container nav navbar-nav">
                            <li>
                                <Link to="/">Games</Link>
                            </li>
                            <li>
                                <Link to="/">Leaderboard</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            {userLink}
                            {signLink}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}