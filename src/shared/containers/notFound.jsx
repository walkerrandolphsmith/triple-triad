import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React from 'react';

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <h1>Doh! 404!</h1>
                <p>These are <em>not</em> the droids you are looking for!</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NotFound);