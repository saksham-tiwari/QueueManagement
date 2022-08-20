import { combineReducers } from "redux";
import {AuthReducer} from './AuthReducer';
import LayoutReducer from './LayoutReducer';
import LoaderReducer from './LoaderReducer';

const rootReducer = combineReducers({
    AuthReducer,
    LayoutReducer,
    LoaderReducer
  });
  
  export default rootReducer;