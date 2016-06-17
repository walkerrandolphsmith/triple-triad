import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationOpen from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    isActive(activeRoute, link) {
        return link === activeRoute ? 'active' : 'passive';
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    push(route) {
        this.props.push(route);
    }

    render() {
        const avatarStyles = {
            width: '32px',
            borderRadius: '50%',
            marginRight: '1em',
            transform: 'translateY(25%)'
        };
        const usernameStyles = {
            verticalAlign: 'bottom'
        };
        const userTab = (
            <div style={{ cursor: 'pointer' }} onClick={this.push.bind(this, '/user')}>
                <img src={this.props.user.get('avatar')} style={avatarStyles}/>
                <span style={usernameStyles}>{this.props.user.get('username')}</span>
            </div>
        );

        return (<div>
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton onClick={this.handleToggle.bind(this)}><NavigationOpen /></IconButton>}
                    iconElementRight={userTab}
                    style={{ backgroundColor: this.context.muiTheme.floatingActionButton.backgroundColor}}
                />
                <Drawer open={this.state.open}>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementLeft={<IconButton onClick={this.handleToggle.bind(this)}><NavigationClose /></IconButton>}
                        style={{ backgroundColor: this.context.muiTheme.floatingActionButton.backgroundColor}}
                    />
                    <MenuItem onClick={this.push.bind(this, '/games')}>Games</MenuItem>
                    <MenuItem onClick={this.push.bind(this, '/leaderboard')}>LeaderBoard</MenuItem>
                    <MenuItem onClick={this.push.bind(this, '/signin')}>SignIn</MenuItem>
                </Drawer>
            </div>
        );
    }
}

Navigation.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};