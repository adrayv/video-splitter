import React, { useContext, useMemo } from "react";
import { splitVideoByResourceId } from "../../services/cloudinary";
import SubmitterView from "./SubmitterView";
import VideoContext from "../../contexts/video";
import ResultsContext from "../../contexts/results";
import CloudinaryContext from "../../contexts/cloudinary";

export default () => {
  const videoContext = useContext(VideoContext);
  const resultsContext = useContext(ResultsContext);
  const cloudinaryContext = useContext(CloudinaryContext);

  return useMemo(() => {
    const splitVideo = () => {
      const { leftVidUrl, rightVidUrl, screenShotUrl } = splitVideoByResourceId(
        cloudinaryContext.getResourceId(),
        videoContext.getTimeToSplit()
      );

      resultsContext.setResults({
        leftVideo: leftVidUrl,
        rightVideo: rightVidUrl,
        screenshot: screenShotUrl
      });
    };
    return <SubmitterView onSubmit={splitVideo} />;
  }, [videoContext, resultsContext, cloudinaryContext]);
};
