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
        ...state,
        videoDataUrl: action.payload.url
      };
    case actions.SET_VIDEO_DURATION:
      return {
        ...state,
        videoDuration: action.payload.duration
      };
    case actions.SET_VIDEO_SZ:
      return {
        ...state,
        videoSize: action.payload.size
      };
    case actions.SET_TIME_TO_SPLIT:
      return {
        ...state,
        timeToSplit: action.payload.time
      };
    default:
      return state;
  }
};
