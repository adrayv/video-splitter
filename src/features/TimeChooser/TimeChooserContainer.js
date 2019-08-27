import React, { useContext } from "react";
import TimeChooserView from "./TimeChooserView";
import VideoContext from "../../contexts/video";

const TimeChooserContainer = props => {
  const videoContext = useContext(VideoContext);
  const duration = videoContext.getVideoDuration();
  const timeToSplit = videoContext.getTimeToSplit();
  return (
    <TimeChooserView
      minTime={0.05 * duration}
      maxTime={duration - 0.05 * duration}
      timeChosen={timeToSplit}
      onTimeChange={videoContext.setTimeToSplit}
    />
  );
};

export default TimeChooserContainer;
