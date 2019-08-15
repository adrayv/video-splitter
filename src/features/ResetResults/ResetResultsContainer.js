import React from "react";
import { connect } from "react-redux";
import ResetResultsView from "./ResetResultsView";
import { resetState } from "../../actions/results";

class ResetResultsContainer extends React.Component {
  render() {
    return <ResetResultsView onResetClick={this.props.reset} />;
  }
}

export default connect(
  null,
  dispatch => {
    return {
      reset: () => dispatch(resetState())
    };
  }
)(ResetResultsContainer);
