const initialState = {
  videoDataUrl: null,
  videoDuration: null,
  videoSize: null,
  timeToSplit: null
};

export const actions = {
  SET_VIDEO_URL: "SET_VIDEO_URL",
  SET_VIDEO_DURATION: "SET_VIDEO_DURATION",
  SET_VIDEO_SZ: "SET_VIDEO_SZ",
  SET_TIME_TO_SPLIT: "SET_TIME_TO_SPLIT"
};

export const selectors = {
  getVideoUrl: state => state.videoDataUrl,
  getVideoSize: state => state.videoDuration,
  getVideoDuration: state => state.videoDuration,
  getTimeToSplit: state => state.timeToSplit
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_VIDEO_URL:
      return {
        videoDataUrl: action.payload.url,
        ...state
      };
    case actions.SET_VIDEO_DURATION:
      return {
        videoDuration: action.payload.duration,
        ...state
      };
    case actions.SET_VIDEO_SZ:
      return {
        videoSize: action.payload.size,
        ...state
      };
    case actions.SET_TIME_TO_SPLIT:
      return {
        timeToSplit: action.payload.time,
        ...state
      };
    default:
      return state;
  }
};
