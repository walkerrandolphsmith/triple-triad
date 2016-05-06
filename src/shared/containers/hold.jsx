import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Hold } from './../components';

function mapStateToProps(state) {
    return {
        holding: true
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Hold);