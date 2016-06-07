import React from 'react';
import { InviteForm } from './inviteForm';
import { Checkbox } from './checkbox';

export class Invite extends React.Component {

    constructor(props){
        super(props);

        const { settings } = props;

        this.state = {
            multiplayer: settings.multiplayer
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
        if (newProps != this.state) {

            const { settings } = newProps;

            this.setState({
                multiplayer: settings.multiplayer
            });
        }
    }

    update(setting) {
        this.props.updateSetting(setting);
    }

    focus(setting) {
        this.props.updateFocusSetting(setting)
    }

    render() {

        let { isMounted, multiplayer } = this.state;

        let focus = isMounted ? this.focus : () => {};

        let inviteForm = multiplayer 
            ? (<InviteForm gameId={this.props.gameId} sendInvite={this.props.sendInvite} />) 
            : (<button className="btn btn-main" onClick={this.props.endPhaseInvite}> Next step</button>);

        return (
            <div id="settings-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings">
                            <Checkbox id="two-player"
                                      label="2 Player"
                                      checked={multiplayer}
                                      onChange={this.update.bind(this, 'multiplayer')}
                                      onFocus={focus.bind(this, 'multiplayer')}
                            />
                            {inviteForm}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}