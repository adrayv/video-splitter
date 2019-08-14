import { combineReducers, createStore } from "redux";
import ui from "./reducers/ui";
import video from "./reducers/video";
import results from "./reducers/results";
import cloudinary from "./reducers/cloudinary";

const rootReducer = combineReducers({
  ui,
  video,
  results,
  cloudinary
});

export default createStore(rootReducer);
