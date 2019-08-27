import React, { useContext } from "react";
import { connect } from "react-redux";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { setResults } from "../../actions/results";
import { splitVideoByResourceId } from "../../services/cloudinary";
import SubmitterView from "./SubmitterView";
import VideoContext from "../../contexts/video";

const SubmitterContainer = props => {
  const videoContext = useContext(VideoContext);
  const splitVideo = () => {
    const { leftVidUrl, rightVidUrl, screenShotUrl } = splitVideoByResourceId(
      props.cloudinaryResourceId,
      videoContext.getTimeToSplit()
    );
    props.setResults(leftVidUrl, rightVidUrl, screenShotUrl);
  };
  return <SubmitterView onSubmit={splitVideo} />;
};

export default connect(
  state => {
    return {
      cloudinaryResourceId: cloudinarySelectors.getResourceId(state.cloudinary)
    };
  },
  dispatch => {
    return {
      setResults: (leftVideo, rightVideo, screenshot) =>
        dispatch(
          setResults({
            leftVideo,
            rightVideo,
            screenshot
          })
        )
    };
  }
)(SubmitterContainer);
