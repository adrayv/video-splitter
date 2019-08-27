import React, { useContext } from "react";
import { connect } from "react-redux";
import * as videoActions from "../../actions/video";
import * as cloudinaryActions from "../../actions/cloudinary";
import { uploadVideo } from "../../services/cloudinary";
import FileChooserView from "./FileChooserView";
import UIContext from "../../contexts/ui";

const FileChooserContainer = props => {
  const uiContext = useContext(UIContext);
  return (
    <FileChooserView
      onVideoUrlReady={async dataSrc => {
        uiContext.setLoadingOn();
        props.setCloudinaryResourceId(await uploadVideo(dataSrc));
        uiContext.setLoadingOff();
        props.setVideoData(dataSrc);
      }}
      onVideoSizeReady={props.setVideoSize}
      onVideoDurationReady={duration => {
        props.setChosenTime(duration / 2);
        props.setVideoDuration(duration);
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
        dispatch(cloudinaryActions.setResourceId(id)),
      setVideoData: video => dispatch(videoActions.setVideoData(video)),
      setVideoSize: sz => {
        dispatch(videoActions.setVideoSize(sz));
      },
      setVideoDuration: duration =>
        dispatch(videoActions.setVideoDuration(duration)),
      setChosenTime: time => dispatch(videoActions.setTimeToSplit(time))
    };
  }
)(FileChooserContainer);
