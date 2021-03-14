//tem a função de combinar vários reducers e exportá-los
import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
