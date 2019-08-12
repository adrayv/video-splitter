import React from "react";
import { connect } from "react-redux";
import * as videoActions from "../../actions/video";
import FileChooserView from "./FileChooserView";

class FileChooserContainer extends React.Component {
  render() {
    return (
      <FileChooserView
        onVideoUrlReady={this.props.setVideoData}
        onVideoSizeReady={this.props.setVideoSize}
        onVideoDurationReady={this.props.setVideoDuration}
      />
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      setVideoData: video => dispatch(videoActions.setVideoData(video)),
      setVideoSize: sz => {
        dispatch(videoActions.setVideoSize(sz));
      },
      setVideoDuration: duration =>
        dispatch(videoActions.setVideoDuration(duration))
    };
  }
)(FileChooserContainer);
