import React from "react";
import PropTypes from "prop-types";

export default class FileChooser extends React.Component {
  static propTypes = {
    onFileReady: PropTypes.func.isRequired
  };
  buildFileSelector = () => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("onChange", e => console.log(e.target.value));
    return fileSelector;
  };
  componentDidMount() {
    // this.fileSelector = this.buildFileSelector();
  }
  handleFileSelect = () => {
    this.fileSelector.click();
  };
  render() {
    return (
      <input
        type="file"
        onChange={async e => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.props.onFileReady(reader.result);
          };
        }}
      />
    );
  }
}
