import React, { useContext } from "react";
import TimestampPreviewView from "./TimestampPreviewView";
import VideoContext from "../../contexts/video";

const TimestampPreviewContainer = () => {
  const videoContext = useContext(VideoContext);
  return <TimestampPreviewView seconds={videoContext.getTimeToSplit()} />;
};

export default TimestampPreviewContainer;
