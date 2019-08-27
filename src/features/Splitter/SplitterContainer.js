import React, { useContext } from "react";
import { connect } from "react-redux";
import SplitterView from "./SplitterView";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { selectors as resultSelectors } from "../../reducers/results";
import VideoContext from "../../contexts/video";

const SplitterContainer = props => {
  const videoContext = useContext(VideoContext);
  const isVideoChosen = Boolean(
    videoContext.getVideoUrl() &&
      videoContext.getVideoDuration() &&
      videoContext.getVideoSize() &&
      props.isCloudinaryReady
  );

  const isTimeChosen = Boolean(videoContext.getTimeToSplit());
  return (
    <SplitterView
      isVideoChosen={isVideoChosen}
      isTimeChosen={isTimeChosen}
      areResultsAvailable={props.areResultsAvailable}
    />
  );
};

export default connect(
  state => {
    return {
      isCloudinaryReady: cloudinarySelectors.getResourceId(state.cloudinary),
      areResultsAvailable: Object.values(
        resultSelectors.getResults(state.results)
      ).some(result => Boolean(result))
    };
  },
  dispatch => {
    return {};
  }
)(SplitterContainer);
