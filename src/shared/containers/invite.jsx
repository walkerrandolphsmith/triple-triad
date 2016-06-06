import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Invite } from './../components';
import { endPhaseInvite, sendInvite, updateFocusSetting, updateSetting, currentGameSelector } from './../ducks/game';

function mapStateToProps(state) {
    const currentGame = currentGameSelector(state);
    return {
        settings: currentGame.settings,
        gameId: state.routing.locationBeforeTransitions.pathname.split('game/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhaseInvite, sendInvite, updateFocusSetting, updateSetting }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Invite);