import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/results";
import ResultsView from "./ResultsView";

class ResultsContainer extends React.Component {
  render() {
    return (
      <ResultsView
        leftVideoUrl={this.props.leftVideo}
        rightVideoUrl={this.props.rightVideo}
        screenshot={this.props.screenshot}
      />
    );
  }
}

export default connect(
  state => {
    return {
      ...selectors.getResults(state.results)
    };
  },
  dispatch => {
    return {};
  }
)(ResultsContainer);
