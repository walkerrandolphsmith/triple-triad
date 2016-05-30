import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Settings } from './../components';
import { endPhaseSettingsSelection } from './../ducks/game';
import { updateFocusSetting, updateSetting } from '../ducks/settings';

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhaseSettingsSelection, updateFocusSetting, updateSetting }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);