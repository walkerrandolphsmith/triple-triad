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

        const navLinks = user ? ['games', 'leaderboard'] : [];

        let links = navLinks.map((link, index) => {
            const path = `/${link}`;
            return (<li key={index} className={this.isActive(activeRoute, path)}>
                <Link to={path}>{link}</Link>
            </li>)
        });

        let userLink = user
            ? (<li className={this.isActive(activeRoute, '/user')}><Link to="/user"><img src="assets/images/default-user.png"/><span>{user}</span></Link></li>)
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
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}