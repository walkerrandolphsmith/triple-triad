import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox } from './checkbox';

export class Settings extends React.Component {

    constructor(props){
        super(props);

        let { settings } = props;

        this.state = {
            randomHand: settings.randomHand,
            visibleHand: settings.visibleHand
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
                randomHand: settings.randomHand,
                visibleHand: settings.visibleHand
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
        let { isMounted, randomHand, visibleHand } = this.state;

        let focus = isMounted ? this.focus : () => {};

        return (
            <div id="settings-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings">
                            <Checkbox id="random-hand"
                                      label="Random Hand"
                                      checked={randomHand}
                                      onChange={this.update.bind(this, 'randomHand')}
                                      onFocus={focus.bind(this, 'randomHand')}
                            />
                            <Checkbox id="hidden-hand"
                                      label="Hide Opponent's Hand"
                                      checked={visibleHand}
                                      onChange={this.update.bind(this, 'visibleHand')}
                                      onFocus={focus.bind(this, 'visibleHand')}
                            />
                        </div>
                        <RaisedButton
                            label="Next Step"
                            labelColor={'white'}
                            backgroundColor={this.context.muiTheme.baseTheme.palette.backgroundColor}
                            style={{ backgroundColor: this.context.muiTheme.baseTheme.palette.backgroundColor}}
                            onMouseDown={this.props.endPhaseSettingsSelection} />
                    </div>
                </div>
            </div>
        );
    }
}

Settings.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};