import React from "react";
import PropTypes from "prop-types";

export default class ResultsView extends React.Component {
  static propTypes = {
    leftVideoUrl: PropTypes.string.isRequired,
    rightVideoUrl: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired
  };
  render() {
    return (
      <React.Fragment>
        <a
          href={this.props.leftVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Left Video
        </a>
        <a
          href={this.props.screenshot}
          target="_blank"
          rel="noopener noreferrer"
        >
          Screenshot
        </a>
        <a
          href={this.props.rightVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Right Video
        </a>
      </React.Fragment>
    );
  }
}
