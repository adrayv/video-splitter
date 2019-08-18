import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/video";
import TimestampPreviewView from "./TimestampPreviewView";

class TimestampPreviewContainer extends React.Component {
  render() {
    return <TimestampPreviewView seconds={this.props.timeToSplit} />;
  }
}

export default connect(
  state => {
    return {
      timeToSplit: selectors.getTimeToSplit(state.video)
    };
  },
  null
)(TimestampPreviewContainer);
