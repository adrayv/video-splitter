import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FileChooser from "../FileChooser";

const Card = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 8px;
  border: 0.5px solid #eee;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.15);
`;

export default class SplitterView extends React.Component {
  static propTypes = {
    onSplit: PropTypes.func.isRequired
  };
  render() {
    return (
      <Card>
        <FileChooser
          onFileReady={(file, time) => this.props.onSplit(file, time)}
        />
      </Card>
    );
  }
}
