import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
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
        const avatar = <Avatar src={this.props.user.get('avatar')} />;
        const userTab = (
            <List style={{marginTop: '-4px', paddingTop: '0', paddingBottom: '0'}}>
                <ListItem
                    disabled={true}
                    leftAvatar={avatar}>
                    {this.props.user.get('username')}
                </ListItem>
            </List>
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