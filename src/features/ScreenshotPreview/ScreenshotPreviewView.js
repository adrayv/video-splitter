import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Preview = styled.div`
  background: url(${({ src }) => src}) no-repeat center;
  background-size: contain;
  width: 300px;
  height: 300px;
`;

export default class ScreenshotPreviewView extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.any.isRequired
  };
  render() {
    return <Preview src={this.props.imageSrc} />;
  }
}
