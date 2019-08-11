const initialState = {
  isLoading: false
};

export const actions = {
  SET_LOADING_ON: "SET_LOADING_ON",
  SET_LOADING_OFF: "SET_LOADING_OFF"
};

export const selectors = {
  isAppLoading: state => state.isLoading
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_ON:
      return {
        isLoading: true,
        ...state
      };
    case actions.SET_LOADING_OFF:
      return {
        isLoading: false,
        ...state
      };
    default:
      return state;
  }
};
