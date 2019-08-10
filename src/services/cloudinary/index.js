import c from "cloudinary-core";
import axios from "axios";

const cloudinary = new c.Cloudinary({
  cloud_name: String(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME),
  api_key: String(process.env.REACT_APP_CLOUDINARY_API_KEY),
  api_secret: String(process.env.REACT_APP_CLOUDINARY_API_SECRET)
});

export async function splitVideo(videoDataURI, timeToSplit) {
  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/adrayv/video/upload`,
    {
      file: videoDataURI,
      upload_preset: "ieno9k19"
    }
  );
  let cloudinaryResourceUrl = res.data.secure_url;

  cloudinaryResourceUrl = String(cloudinaryResourceUrl).split("/");

  let cloudinaryResourceId =
    cloudinaryResourceUrl[cloudinaryResourceUrl.length - 1];

  const leftVidUrl = cloudinary.video_url(cloudinaryResourceId, {
    start_offset: 0,
    end_offset: timeToSplit
  });

  const rightVidUrl = cloudinary.video_url(cloudinaryResourceId, {
    start_offset: timeToSplit,
    end_offset: "100p"
  });

  const screenShotUrl =
    String(rightVidUrl).substr(0, rightVidUrl.length - 4) + ".jpg";

  return {
    leftVidUrl,
    rightVidUrl,
    screenShotUrl
  };
}
