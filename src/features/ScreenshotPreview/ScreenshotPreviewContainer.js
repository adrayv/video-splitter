import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/video";
import { selectors as cloudinarySelectors } from "../../reducers/cloudinary";
import { getScreenshotByTime } from "../../services/cloudinary";
import ScreenshotPreviewView from "./ScreenshotPreviewView";

class ScreenshotPreviewContainer extends React.Component {
  render() {
    return (
      <ScreenshotPreviewView
        imageSrc={getScreenshotByTime(
          this.props.resourceId,
          this.props.timeToSplit
        )}
      />
    );
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
