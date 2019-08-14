const initialState = {
  cloudinaryResourceId: null
};

export const actions = {
  SET_RESOURCE_ID: "SET_RESOURCE_ID"
};

export const selectors = {
  getResourceId: state => state.cloudinaryResourceId
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_RESOURCE_ID:
      return {
        ...state,
        cloudinaryResourceId: action.payload.id
      };
    default:
      return state;
  }
};
