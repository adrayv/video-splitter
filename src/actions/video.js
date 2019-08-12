import { actions } from "../reducers/video";

export const setVideoData = data => {
  return {
    type: actions.SET_VIDEO_URL,
    payload: {
      url: data
    }
  };
};

export const setVideoDuration = duration => {
  return {
    type: actions.SET_VIDEO_DURATION,
    payload: {
      duration
    }
  };
};

export const setVideoSize = size => {
  return {
    type: actions.SET_VIDEO_SZ,
    payload: {
      size
    }
  };
};

export const setTimeToSplit = time => {
  return {
    type: actions.SET_TIME_TO_SPLIT,
    payload: {
      time
    }
  };
};
