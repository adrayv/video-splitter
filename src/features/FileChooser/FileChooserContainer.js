import React, { useContext } from "react";
import { uploadVideo } from "../../services/cloudinary";
import FileChooserView from "./FileChooserView";
import UIContext from "../../contexts/ui";
import VideoContext from "../../contexts/video";
import CloudinaryContext from "../../contexts/cloudinary";

export default () => {
  const uiContext = useContext(UIContext);
  const videoContext = useContext(VideoContext);
  const cloudinaryContext = useContext(CloudinaryContext);

  return (
    <FileChooserView
      onVideoUrlReady={async dataSrc => {
        uiContext.setLoadingOn();
        cloudinaryContext.setResourceId(await uploadVideo(dataSrc));
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
