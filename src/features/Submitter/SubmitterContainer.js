import React from "react";
import { connect } from "react-redux";
import { selectors as videoStateSelectors } from "../../reducers/video";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { setResults } from "../../actions/results";
import { splitVideoByResourceId } from "../../services/cloudinary";
import SubmitterView from "./SubmitterView";

class SubmitterContainer extends React.Component {
  splitVideo = () => {
    const { leftVidUrl, rightVidUrl, screenShotUrl } = splitVideoByResourceId(
      this.props.cloudinaryResourceId,
      this.props.timeToSplit
    );
    this.props.setResults(leftVidUrl, rightVidUrl, screenShotUrl);
  };
  render() {
    return <SubmitterView onSubmit={this.splitVideo} />;
  }
}

export default connect(
  state => {
    return {
      cloudinaryResourceId: cloudinarySelectors.getResourceId(state.cloudinary),
      timeToSplit: videoStateSelectors.getTimeToSplit(state.video)
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
