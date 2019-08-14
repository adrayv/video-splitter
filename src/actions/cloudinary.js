import { actions } from "../reducers/cloudinary";

export const setResourceId = id => {
  return {
    type: actions.SET_RESOURCE_ID,
    payload: {
      id
    }
  };
};
