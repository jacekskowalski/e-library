import { combineReducers } from "redux";
import selectedBooks from "./reducer";
import history from "./history";
const allReducers = combineReducers({
  selectedBooks,
  history
 })
 export default allReducers;