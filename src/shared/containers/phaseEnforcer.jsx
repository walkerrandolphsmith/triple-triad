import React from 'react';
import { connect } from 'react-redux';
import { currentGameSelector } from '../ducks/game';
import PHASE from './../constants/phases';

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

    const mapStateToProps = (state) => {
        const currentGame = currentGameSelector(state);
        const currentPhase = currentGame ? currentGame.get('phase') : PHASE.SETTINGS_SELECTION;
        return {
            rollupPhase: getRollupPhase(currentPhase),
            path: state.routing.locationBeforeTransitions.pathname
        }
    };

    return connect(mapStateToProps)(PhaseEnforcerComponent);
}

function getRollupPhase(phase) {
    return (phase === PHASE.CARD_SELECTION || phase === PHASE.PIECE_SELECTION) ? 'round' : phase;
}

function GetComponentForRoute(rollupPhase, Settings, Invite, Cards, Round) {
    
    let componentMap = {
        [PHASE.SETTINGS_SELECTION]: <Settings />,
        [PHASE.INVITE]: <Invite />,
        [PHASE.HAND_SELECTION]: <Cards />,
        ['round']: <Round />
    };
    
    return componentMap[rollupPhase];
}

function createBreadcrumb(phase) {
    const settingsClass = phase === PHASE.SETTINGS_SELECTION ? 'active' : '';
    const inviteClass = phase === PHASE.INVITE ? 'active' : '';
    const handClass = phase === PHASE.HAND_SELECTION ? 'active' : '';
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