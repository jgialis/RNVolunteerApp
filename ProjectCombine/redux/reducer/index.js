import { combineReducers } from "redux";
import { user } from "../../redux/reducer/user.js";

const Reducers = combineReducers({
  userState: user,
});

export default Reducers;
