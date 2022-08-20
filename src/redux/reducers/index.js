import { combineReducers } from "redux";
import {AuthReducer} from './AuthReducer';
import LayoutReducer from './LayoutReducer';

const rootReducer = combineReducers({
    AuthReducer,
    LayoutReducer,
  });
  
  export default rootReducer;