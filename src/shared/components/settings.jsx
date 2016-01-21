import React from 'react';

export default class Settings extends React.Component {

    constructor(props){
        super(props);

        let { settings } = props;

        this.state = {
            randomHand: settings.get('randomHand'),
            multiplayer: settings.get('multiplayer'),
            visibleHand: settings.get('visibleHand')
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
                randomHand: settings.get('randomHand'),
                multiplayer: settings.get('multiplayer'),
                visibleHand: settings.get('visibleHand')
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

        let { isMounted, randomHand, multiplayer, visibleHand } = this.state;

        let focus = isMounted ? this.focus : () => {};

        return (
            <div id="settings-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings">
                            <div className="control-group">
                                <input type="checkbox" id="random-hand" checked={randomHand}
                                    onChange={this.update.bind(this, 'randomHand')}
                                    onFocus={focus.bind(this, 'randomHand')}>
                                </input>
                                <label htmlFor="random-hand"></label>
                                <label className="text" htmlFor="random-hand">Random Hand</label>
                            </div>
                            <div className="control-group">
                                <input type="checkbox" id="two-player" checked={multiplayer}
                                    onChange={this.update.bind(this, 'multiplayer')}
                                    onFocus={focus.bind(this, 'multiplayer')}>
                                </input>
                                <label htmlFor="two-player"></label>
                                <label className="text" htmlFor="two-player">2 Player</label>
                            </div>
                            <div className="control-group">
                                <input type="checkbox" id="hidden-hand" checked={visibleHand}
                                    onChange={this.update.bind(this, 'visibleHand')}
                                    onFocus={focus.bind(this, 'visibleHand')}>
                                </input>
                                <label htmlFor="hidden-hand"></label>
                                <label className="text" htmlFor="hidden-hand">Hide opponent's hand</label>
                            </div>
                        </div>
                        <button className="btn btn-next" onClick={this.props.updateRoute}> Next step</button>
                    </div>
                </div>
            </div>
        );
    }
}