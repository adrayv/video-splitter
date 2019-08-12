import React from "react";
import { connect } from "react-redux";
import SplitterView from "./SplitterView";
import { selectors } from "../../reducers/video";

class SplitterContainer extends React.Component {
  render() {
    return (
      <SplitterView
        isVideoChosen={this.props.isVideoChosen}
        isTimeChosen={this.props.isTimeChosen}
      />
    );
  }
}

export default connect(
  state => {
    return {
      isVideoChosen: Boolean(
        selectors.getVideoUrl(state.video) &&
          selectors.getVideoDuration(state.video) &&
          selectors.getVideoSize(state.video)
      ),
      isTimeChosen: Boolean(selectors.getTimeToSplit(state.video))
    };
  },
  dispatch => {
    return {};
  }
)(SplitterContainer);
