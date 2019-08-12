import React from "react";
import PropTypes from "prop-types";

export default class FileChooserView extends React.Component {
  static propTypes = {
    onVideoUrlReady: PropTypes.func.isRequired,
    onVideoSizeReady: PropTypes.func.isRequired,
    onVideoDurationReady: PropTypes.func.isRequired
  };
  getVideoUrl = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };
  getVideoDuration = videoSrc => {
    return new Promise(resolve => {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.onloadedmetadata = () => {
        resolve(Number(video.duration).toFixed(1));
      };
    });
  };
  inputHandler = async e => {
    const file = e.target.files[0];
    this.props.onVideoSizeReady(file.size);
    const videoSrc = await this.getVideoUrl(file);
    this.props.onVideoUrlReady(videoSrc);
    const videoDuration = await this.getVideoDuration(videoSrc);
    this.props.onVideoDurationReady(videoDuration);
  };
  render() {
    return <input type="file" onChange={this.inputHandler} />;
  }
}
