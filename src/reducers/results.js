const initialState = {
  leftVideo: null,
  rightVideo: null,
  screenshot: null
};

export const actions = {
  SET_RESULTS: "SET_RESULTS"
};

export const selectors = {
  getResults: state => [state.leftVideo, state.screenshot, state.rightVideo]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_RESULTS:
      return {
        ...state,
        leftVideo: action.payload.left,
        rightVideo: action.payload.right,
        screenshot: action.payload.screenshot
      };
    default:
      return state;
  }
};
