import React, { useState, createContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    videoDataUrl: null,
    videoDuration: null,
    videoSize: null,
    timeToSplit: null
  });
  return (
    <Context.Provider
      value={{
        getVideoUrl: () => videoState.videoDataUrl,
        getVideoSize: () => videoState.videoSize,
        getVideoDuration: () => videoState.videoDuration,
        getTimeToSplit: () => videoState.timeToSplit,
        setVideoUrl: url =>
          setVideoState(prev => ({ ...prev, videoDataUrl: url })),
        setVideoDuration: duration =>
          setVideoState(prev => ({ ...prev, videoDuration: duration })),
        setVideoSize: size =>
          setVideoState(prev => ({ ...prev, videoSize: size })),
        setTimeToSplit: time =>
          setVideoState(prev => ({ ...prev, timeToSplit: time }))
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
