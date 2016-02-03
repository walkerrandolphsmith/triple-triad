import React from 'react';
import InviteForm from './inviteForm';

export default class Invite extends React.Component {

    constructor(props){
        super(props);

        let { settings } = props;

        this.state = {
            multiplayer: settings.get('multiplayer')
        };
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps !=  this.state) {

            let { settings } = newProps;

            this.setState({
                multiplayer: settings.get('multiplayer')
            });
        }
    }

    update(setting) {
        this.props.updateSettings(setting);
    }

    focus(setting) {
        this.props.updateFocusSetting(setting)
    }

    render() {

        let { isMounted, multiplayer } = this.state;

        let focus = isMounted ? this.focus : () => {};

        let inviteForm = multiplayer ? (<InviteForm sendInvite={this.props.sendInvite} />) : (<button className="btn btn-next" onClick={this.props.updateRoute}> Next step</button>);

        return (
            <div id="settings-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings">
                            <div className="control-group">
                                <input type="checkbox" id="two-player" checked={multiplayer}
                                    onChange={this.update.bind(this, 'multiplayer')}
                                    onFocus={focus.bind(this, 'multiplayer')}>
                                </input>
                                <label htmlFor="two-player"></label>
                                <label className="text" htmlFor="two-player">2 Player</label>
                            </div>
                            {inviteForm}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}