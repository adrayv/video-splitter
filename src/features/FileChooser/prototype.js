import React from "react";
import PropTypes from "prop-types";

export default class FileChooser extends React.Component {
  static propTypes = {
    onFileReady: PropTypes.func.isRequired
  };
  state = {
    video: null,
    videoDuration: null,
    videoSize: null,
    selectedTimeToSplit: null
  };
  videoLoaded = () => {
    return Boolean(
      this.state.video && this.state.videoDuration && this.state.videoSize
    );
  };
  inputHandler = async e => {
    const file = e.target.files[0];
    this.setState({ videoSize: file.size });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const video = document.createElement("video");
      video.src = reader.result;
      video.onloadedmetadata = () => {
        this.setState({
          videoDuration: Number(video.duration).toFixed(1),
          selectedTimeToSplit: Number(video.duration).toFixed(1) / 2
        });
      };
      this.setState({ video: reader.result });
    };
  };
  rangeInputHander = e => {
    this.setState({ selectedTimeToSplit: e.target.value }, () =>
      console.log(this.state.selectedTimeToSplit)
    );
  };
  render() {
    if (!this.videoLoaded()) {
      return <input type="file" onChange={this.inputHandler} />;
    } else
      return (
        <React.Fragment>
          <input
            type="range"
            min={0.05 * this.state.videoDuration}
            max={this.state.videoDuration - 0.05 * this.state.videoDuration}
            value={this.state.selectedTimeToSplit}
            onChange={this.rangeInputHander}
            step={0.1}
          />
          <button
            onClick={() =>
              this.props.onFileReady(
                this.state.video,
                this.state.selectedTimeToSplit
              )
            }
          >
            Split video at {this.state.selectedTimeToSplit} seconds
          </button>
        </React.Fragment>
      );
  }
}
