import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Settings } from './../components';
import { endPhase } from './../ducks/game';
import { updateFocusSetting, updateSetting } from '../ducks/settings';

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhase, updateFocusSetting, updateSetting }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);