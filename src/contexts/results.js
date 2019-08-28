import React, { createContext, useState } from "react";

const Context = createContext();

const initialState = {
  leftVideo: null,
  rightVideo: null,
  screenshot: null
};

export const Provider = ({ children }) => {
  const [resultsState, setResultsState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        getLeftVideo: () => resultsState.leftVideo,
        getRightVideo: () => resultsState.rightVideo,
        getScreenshot: () => resultsState.screenshot,
        getAllResults: () => resultsState,
        setResults: ({ leftVideo, rightVideo, screenshot }) =>
          setResultsState({ leftVideo, rightVideo, screenshot }),
        resetResults: () => setResultsState(initialState)
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
