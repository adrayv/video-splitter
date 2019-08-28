import React, { useContext } from "react";
import { connect } from "react-redux";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { splitVideoByResourceId } from "../../services/cloudinary";
import SubmitterView from "./SubmitterView";
import VideoContext from "../../contexts/video";
import ResultsContext from "../../contexts/results";

const SubmitterContainer = props => {
  const videoContext = useContext(VideoContext);
  const resultsContext = useContext(ResultsContext);

  const splitVideo = () => {
    const { leftVidUrl, rightVidUrl, screenShotUrl } = splitVideoByResourceId(
      props.cloudinaryResourceId,
      videoContext.getTimeToSplit()
    );

    resultsContext.setResults({
      leftVideo: leftVidUrl,
      rightVideo: rightVidUrl,
      screenshot: screenShotUrl
    });
  };

  return <SubmitterView onSubmit={splitVideo} />;
};

export default connect(
  state => {
    return {
      cloudinaryResourceId: cloudinarySelectors.getResourceId(state.cloudinary)
    };
  },
  null
)(SubmitterContainer);
