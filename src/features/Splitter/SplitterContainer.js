import React, { useContext } from "react";
import SplitterView from "./SplitterView";
import VideoContext from "../../contexts/video";
import ResultsContext from "../../contexts/results";
import CloudinaryContext from "../../contexts/cloudinary";

export default () => {
  const videoContext = useContext(VideoContext);
  const resultsContext = useContext(ResultsContext);
  const cloudinaryContext = useContext(CloudinaryContext);

  const isVideoChosen = Boolean(
    videoContext.getVideoUrl() &&
      videoContext.getVideoDuration() &&
      videoContext.getVideoSize() &&
      cloudinaryContext.getResourceId()
  );

  const areResultsAvailable = Object.values(
    resultsContext.getAllResults()
  ).some(result => Boolean(result));

  const isTimeChosen = Boolean(videoContext.getTimeToSplit());
  return (
    <SplitterView
      isVideoChosen={isVideoChosen}
      isTimeChosen={isTimeChosen}
      areResultsAvailable={areResultsAvailable}
    />
  );
};
