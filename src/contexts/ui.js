import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = props => {
  const [state, setState] = useState({
    isLoading: false
  });
  return (
    <Context.Provider
      value={{
        state,
        setLoadingOn: () => {
          setState(prevState => ({ ...prevState, isLoading: true }));
        },
        setLoadingOff: () => {
          setState(prevState => ({ ...prevState, isLoading: false }));
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
