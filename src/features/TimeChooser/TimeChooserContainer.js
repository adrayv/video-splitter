import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/video";
import TimeChooserView from "./TimeChooserView";
import * as videoActions from "../../actions/video";

class TimeChooserContainer extends React.Component {
  render() {
    return (
      <TimeChooserView
        minTime={0.05 * this.props.duration}
        maxTime={this.props.duration - 0.05 * this.props.duration}
        timeChosen={this.props.chosenTime}
        onTimeChange={this.props.setTime}
      />
    );
  }
}

export default connect(
  state => {
    return {
      duration: selectors.getVideoDuration(state.video),
      chosenTime: selectors.getTimeToSplit(state.video)
    };
  },
  dispatch => {
    return {
      setTime: time => dispatch(videoActions.setTimeToSplit(time))
    };
  }
)(TimeChooserContainer);
