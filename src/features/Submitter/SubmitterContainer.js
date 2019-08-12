import React from "react";
import { connect } from "react-redux";
import { selectors as videoStateSelectors } from "../../reducers/video";
import { setResults } from "../../actions/results";
import { splitVideo } from "../../services/cloudinary";
import SubmitterView from "./SubmitterView";

class SubmitterContainer extends React.Component {
  splitVideo = async () => {
    const { leftVidUrl, rightVidUrl, screenShotUrl } = await splitVideo(
      this.props.videoToSplit,
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
      videoToSplit: videoStateSelectors.getVideoUrl(state.video),
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
