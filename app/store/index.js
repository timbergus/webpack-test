import { combineReducers } from 'redux';

import counter from './counter';
import messages from './messages';

export default combineReducers({ counter, messages });
