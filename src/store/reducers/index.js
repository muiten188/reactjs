
//app
import homeReducer from "../../store/reducers/containers/home_reducer";
import app_Reducer from "../../store/reducers/app_reducer";
import * as types from "../../store/constants/action_types";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  homeReducer,
  //form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGGED_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
 export default rootReducer;