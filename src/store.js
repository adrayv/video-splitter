import { combineReducers, createStore } from "redux";
import ui from "./reducers/ui";
import video from "./reducers/video";

const rootReducer = combineReducers({
  ui,
  video
});

export default createStore(rootReducer);
