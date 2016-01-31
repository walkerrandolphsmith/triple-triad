import React from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

export default function(Component) {

    class PhaseEnforcerComponent extends React.Component {

        componentWillMount() {
            this.enforcePhase();
        }

        componentWillReceiveProps(nextProps) {
            this.enforcePhase();
        }

        enforcePhase() {
            if(!isCorrectRouteForPhase(this.props.rollupPhase, this.props.location.pathname)) {
                const redirect = getRoute(this.props.location.pathname);
                this.props.dispatch(pushPath(null, `/${redirect}`))
            }
        }

        render() {
            return (
                <div>
                    {createBreadcrumb(this.props.rollupPhase)}
                    <Component {...this.props} />
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        rollupPhase: getRollupPhase(state.game.get('phase')),
        path: state.routing.path
    });

    return connect(mapStateToProps)(PhaseEnforcerComponent);
}

function getRollupPhase(phase) {
    return (phase === 'cardSelection' || phase === 'pieceSelection') ? 'round' : phase;
}

function getRoute(currentLocation, phase) {
    return currentLocation;
}

function isCorrectRouteForPhase(rollupPhase, path) {
    return (
        (rollupPhase === 'settingsSelection' && path === '/settings-selection')
        || (rollupPhase === 'handSelection' && path === '/card-selection')
        || (rollupPhase === 'round' && path === '/round')
    )
}

function createBreadcrumb(phase) {
    const settingsClass = phase === 'settingsSelection' ? 'active' : '';
    const handClass = phase === 'handSelection' ? 'active' : '';
    const roundClass = phase === 'round' ? 'active' : '';
    return (
        <ol className="breadcrumb">
            <li className={settingsClass}>Settings</li>
            <li className={handClass}>Hand</li>
            <li className={roundClass}>Round</li>
        </ol>
    )
}