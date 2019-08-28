import React, { useContext } from "react";
import { connect } from "react-redux";
import SplitterView from "./SplitterView";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import VideoContext from "../../contexts/video";
import ResultsContext from "../../contexts/results";

const SplitterContainer = props => {
  const videoContext = useContext(VideoContext);
  const resultsContext = useContext(ResultsContext);

  const isVideoChosen = Boolean(
    videoContext.getVideoUrl() &&
      videoContext.getVideoDuration() &&
      videoContext.getVideoSize() &&
      props.isCloudinaryReady
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

export default connect(
  state => {
    return {
      isCloudinaryReady: cloudinarySelectors.getResourceId(state.cloudinary)
    };
  },
  dispatch => {
    return {};
  }
)(SplitterContainer);
