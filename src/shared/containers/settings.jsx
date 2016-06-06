import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Settings } from './../components';
import { endPhaseSettingsSelection, updateFocusSetting, updateSetting, currentGameSelector } from './../ducks/game';

function mapStateToProps(state) {
    const currentGame = currentGameSelector(state);
    return {
        settings: currentGame.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhaseSettingsSelection, updateFocusSetting, updateSetting }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);