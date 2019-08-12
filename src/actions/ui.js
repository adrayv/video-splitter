import { actions } from "../reducers/ui";

export const stopLoading = () => {
  return {
    type: actions.SET_LOADING_OFF
  };
};

export const startLoading = () => {
  return {
    type: actions.SET_LOADING_ON
  };
};
