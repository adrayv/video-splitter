import { actions } from "../reducers/results";

export const setResults = ({ leftVideo, rightVideo, screenshot }) => {
  return {
    type: actions.SET_RESULTS,
    payload: {
      left: leftVideo,
      right: rightVideo,
      screenshot
    }
  };
};
