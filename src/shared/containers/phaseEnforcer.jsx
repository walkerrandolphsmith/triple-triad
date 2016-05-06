import React from 'react';
import { connect } from 'react-redux';
import { currentGameSelector } from '../ducks/game';
import PHASE from './../constants/phases';
import { BreadCrumb } from './../components';

export default function(Settings, Invite, Cards, Round) {

    class PhaseEnforcerComponent extends React.Component {

        render() {
            const component = GetComponentForRoute(this.props.rollupPhase, Settings, Invite, Cards, Round);
            return (
                <div>
                    <BreadCrumb phase={this.props.rollupPhase} phases={PHASE} />
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