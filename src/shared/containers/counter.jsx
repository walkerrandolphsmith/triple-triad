import { firebaseToProps } from 'refire';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Counter } from './../components/Coutner';

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
};

export default connect(firebaseToProps(["localCounter", "localOtherCounter", "localInvalid", "_status"], mapStateToProps))(Counter);
