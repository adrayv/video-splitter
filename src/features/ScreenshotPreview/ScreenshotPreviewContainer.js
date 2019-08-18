import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/video";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { getScreenshotByTime } from "../../services/cloudinary";
import ScreenshotPreviewView from "./ScreenshotPreviewView";
import debounce from "../../utils/debounce";

class ScreenshotPreviewContainer extends React.Component {
  state = {
    screenshotUrl: ""
  };

  debouncedGetScreenshot = () => {
    debounce(500, () => {
      const screenshotUrl = getScreenshotByTime(
        this.props.resourceId,
        this.props.timeToSplit
      );
      if (this.state.screenshotUrl !== screenshotUrl) {
        this.setState({ screenshotUrl });
      }
    }).call(this);
  };

  render() {
    this.debouncedGetScreenshot();
    return <ScreenshotPreviewView imageSrc={this.state.screenshotUrl} />;
  }
}

export default connect(
  state => {
    return {
      resourceId: cloudinarySelectors.getResourceId(state.cloudinary),
      timeToSplit: selectors.getTimeToSplit(state.video)
    };
  },
  null
)(ScreenshotPreviewContainer);
