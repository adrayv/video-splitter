import React, { createContext, useState } from "react";

const Context = createContext();

const initialState = {
  cloudinaryResourceId: null
};

export const Provider = ({ children }) => {
  const [cloudinaryState, setCloudinaryState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        setResourceId: id => setCloudinaryState({ cloudinaryResourceId: id }),
        getResourceId: () => cloudinaryState.cloudinaryResourceId
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Context;
