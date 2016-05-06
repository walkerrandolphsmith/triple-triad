import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Invite } from './../components';
import { endPhase } from './../ducks/game';
import { updateFocusSetting, updateSetting } from '../ducks/settings';

function mapStateToProps(state) {
    return {
        settings: state.settings,
        gameId: state.routing.locationBeforeTransitions.pathname.split('game/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhase, updateFocusSetting, updateSetting }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Invite);