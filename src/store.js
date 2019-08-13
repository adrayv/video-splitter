import { combineReducers, createStore } from "redux";
import ui from "./reducers/ui";
import video from "./reducers/video";
import results from "./reducers/results";

const rootReducer = combineReducers({
  ui,
  video,
  results
});

export default createStore(rootReducer);
