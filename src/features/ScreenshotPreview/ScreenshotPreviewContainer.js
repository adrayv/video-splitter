import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { getScreenshotByTime } from "../../services/cloudinary";
import ScreenshotPreviewView from "./ScreenshotPreviewView";
import debounce from "../../utils/debounce";
import VideoContext from "../../contexts/video";

let self = { timerId: null };

const ScreenshotPreviewContainer = props => {
  const videoContext = useContext(VideoContext);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const debouncedGetScreenshot = () => {
    debounce(500, () => {
      const nextScreenshot = getScreenshotByTime(
        props.resourceId,
        videoContext.getTimeToSplit()
      );
      if (screenshotUrl !== nextScreenshot) {
        setScreenshotUrl(nextScreenshot);
      }
    }).call(self);
  };
  debouncedGetScreenshot();
  return <ScreenshotPreviewView imageSrc={screenshotUrl} />;
};

export default connect(
  state => {
    return {
      resourceId: cloudinarySelectors.getResourceId(state.cloudinary)
    };
  },
  null
)(ScreenshotPreviewContainer);
