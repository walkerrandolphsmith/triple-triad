import React from 'react';
import { connect } from 'react-redux';

export default function(Settings, Invite, Cards, Round) {

    class PhaseEnforcerComponent extends React.Component {

        render() {
            const component = GetComponentForRoute(this.props.rollupPhase, Settings, Invite, Cards, Round);
            const breadCrumb = createBreadcrumb(this.props.rollupPhase);
            return (
                <div>
                    {breadCrumb}
                    {component}
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        rollupPhase: getRollupPhase(state.game.get('phase')),
        path: state.routing.locationBeforeTransitions.pathname
    });

    return connect(mapStateToProps)(PhaseEnforcerComponent);
}

function getRollupPhase(phase) {
    return (phase === 'cardSelection' || phase === 'pieceSelection') ? 'round' : phase;
}

function GetComponentForRoute(rollupPhase, Settings, Invite, Cards, Round) {
    switch(rollupPhase) {
        case 'settingsSelection':
            return (<Settings />);
            break;
        case 'invite':
            return (<Invite />);
            break;
        case 'handSelection':
            return (<Cards />);
            break;
        case 'round':
            return (<Round />);
            break;
    }
}

function createBreadcrumb(phase) {
    const settingsClass = phase === 'settingsSelection' ? 'active' : '';
    const inviteClass = phase === 'invite' ? 'active' : '';
    const handClass = phase === 'handSelection' ? 'active' : '';
    const roundClass = phase === 'round' ? 'active' : '';
    return (
        <ol className="breadcrumb">
            <li className={settingsClass}>Settings</li>
            <li className={inviteClass}>Invite</li>
            <li className={handClass}>Hand</li>
            <li className={roundClass}>Round</li>
        </ol>
    )
}