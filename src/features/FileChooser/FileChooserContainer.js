import React from "react";
import { connect } from "react-redux";
import * as videoActions from "../../actions/video";
import * as cloudinaryActions from "../../actions/cloudinary";
import { uploadVideo } from "../../services/cloudinary";
import FileChooserView from "./FileChooserView";

class FileChooserContainer extends React.Component {
  render() {
    return (
      <FileChooserView
        onVideoUrlReady={async dataSrc => {
          this.props.setCloudinaryResourceId(await uploadVideo(dataSrc));
          this.props.setVideoData(dataSrc);
        }}
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
      setCloudinaryResourceId: id =>
        dispatch(cloudinaryActions.setResourceId(id)),
      setVideoData: video => dispatch(videoActions.setVideoData(video)),
      setVideoSize: sz => {
        dispatch(videoActions.setVideoSize(sz));
      },
      setVideoDuration: duration =>
        dispatch(videoActions.setVideoDuration(duration))
    };
  }
)(FileChooserContainer);
