import React from 'react';
import { Link } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export class Navigation extends React.Component {

    isActive(activeRoute, link) {
        return link === activeRoute ? 'active' : 'passive';
    }

    render() {

        let { user } = this.props;

        const navLinks = user ? ['games', 'leaderboard'] : [];

        let links = navLinks.map((link, index) => (
            <LinkContainer key={index} to={{ pathname: `/${link}` }}>
                <NavItem eventKey={index}>
                    <span>{link}</span>
                </NavItem>
            </LinkContainer>
        ));

        let userLink = user
            ? (
                <LinkContainer to={{ pathname: '/user' }}>
                    <NavItem eventKey={1}>
                        <img src={user.get('avatar')}/>
                        <span>{user.get('username')}</span>
                    </NavItem>
                </LinkContainer>
            )
            : (
                <LinkContainer to={{ pathname: '/signin' }}>
                    <NavItem eventKey={1}><span>SignIn</span></NavItem>
                </LinkContainer>
            );

        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" eventKey={1}>Triple Triad</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {links}
                    </Nav>
                    <Nav pullRight>
                        {userLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}