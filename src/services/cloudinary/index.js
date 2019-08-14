import c from "cloudinary-core";
import axios from "axios";

const cloudinary = new c.Cloudinary({
  cloud_name: String(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME),
  api_key: String(process.env.REACT_APP_CLOUDINARY_API_KEY),
  api_secret: String(process.env.REACT_APP_CLOUDINARY_API_SECRET)
});

export const uploadVideo = async videoSrc => {
  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/adrayv/video/upload`,
    {
      file: videoSrc,
      upload_preset: "ieno9k19"
    }
  );
  let cloudinaryResourceUrl = res.data.secure_url;

  cloudinaryResourceUrl = String(cloudinaryResourceUrl).split("/");

  let cloudinaryResourceId =
    cloudinaryResourceUrl[cloudinaryResourceUrl.length - 1];

  return cloudinaryResourceId;
};

export const getLeftVideoByTime = (cloudinaryResourceId, timeToSplit) => {
  return cloudinary.video_url(cloudinaryResourceId, {
    start_offset: 0,
    end_offset: timeToSplit
  });
};

export const getRightVideoByTime = (cloudinaryResourceId, timeToSplit) => {
  return cloudinary.video_url(cloudinaryResourceId, {
    start_offset: timeToSplit,
    end_offset: "100p"
  });
};

export const getScreenshotByTime = (cloudinaryResourceId, timeToSplit) => {
  const rightVidUrl = getRightVideoByTime(cloudinaryResourceId, timeToSplit);
  return String(rightVidUrl).substr(0, rightVidUrl.length - 4) + ".jpg";
};

export const splitVideoByResourceId = (cloudinaryResourceId, timeToSplit) => {
  return {
    leftVidUrl: getLeftVideoByTime(cloudinaryResourceId, timeToSplit),
    rightVidUrl: getRightVideoByTime(cloudinaryResourceId, timeToSplit),
    screenShotUrl: getScreenshotByTime(cloudinaryResourceId, timeToSplit)
  };
};
