import React, { useContext, useState } from "react";
import { getScreenshotByTime } from "../../services/cloudinary";
import ScreenshotPreviewView from "./ScreenshotPreviewView";
import debounce from "../../utils/debounce";
import VideoContext from "../../contexts/video";
import CloudinaryContext from "../../contexts/cloudinary";

let self = { timerId: null };

export default () => {
  const videoContext = useContext(VideoContext);
  const cloudinaryContext = useContext(CloudinaryContext);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const debouncedGetScreenshot = () => {
    debounce(500, () => {
      const nextScreenshot = getScreenshotByTime(
        cloudinaryContext.getResourceId(),
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
