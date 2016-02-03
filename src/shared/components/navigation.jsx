import React from 'react';
import { Link } from 'react-router'

export default class Navigation extends React.Component {

    isActive(activeRoute, link) {
        return link === activeRoute ? 'active' : 'passive';
    }

    render() {
        let { user, activeRoute, signOut } = this.props;

        let homeLink = (
            <li className={this.isActive(activeRoute, '/')}>
                <Link to="/" className="navbar-brand"></Link>
            </li>
        );

        let links = ['games', 'leaderboard'].map((link, index) => {
            console.log(link, index);
            return (<li key={index} className={this.isActive(activeRoute, link)}>
                <Link to="/">{link}</Link>
            </li>)
        });

        let userLink = user
            ? (<li className={this.isActive(activeRoute, '/user')}><a><img src="assets/images/default-user.png"/><span>{user}</span></a></li>)
            : (<li></li>);

        let signLink = user
            ? (<li><a onClick={signOut}>SignOut</a></li>)
            : (<li className={this.isActive(activeRoute, '/signin')}><Link to="/signin">SignIn</Link></li>);

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
                        {homeLink}
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">

                        <ul className="container nav navbar-nav">
                            {links}
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