import _ from 'lodash';
import * as actions from './actionCreators';
import * as asyncActions from './asyncActionCreators';

export default _.assign(actions, asyncActions);