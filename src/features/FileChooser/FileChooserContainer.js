import React, { useContext } from "react";
import { connect } from "react-redux";
import * as cloudinaryActions from "../../actions/cloudinary";
import { uploadVideo } from "../../services/cloudinary";
import FileChooserView from "./FileChooserView";
import UIContext from "../../contexts/ui";
import VideoContext from "../../contexts/video";

const FileChooserContainer = props => {
  const uiContext = useContext(UIContext);
  const videoContext = useContext(VideoContext);
  return (
    <FileChooserView
      onVideoUrlReady={async dataSrc => {
        uiContext.setLoadingOn();
        props.setCloudinaryResourceId(await uploadVideo(dataSrc));
        uiContext.setLoadingOff();
        videoContext.setVideoUrl(dataSrc);
      }}
      onVideoSizeReady={videoContext.setVideoSize}
      onVideoDurationReady={duration => {
        videoContext.setTimeToSplit(duration / 2);
        videoContext.setVideoDuration(duration);
      }}
    />
  );
};

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      setCloudinaryResourceId: id =>
        dispatch(cloudinaryActions.setResourceId(id))
    };
  }
)(FileChooserContainer);
