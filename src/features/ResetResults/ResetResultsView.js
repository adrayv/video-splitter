import React from "react";
import PropTypes from "prop-types";

const ResetResultsView = props => (
  <button onClick={props.onResetClick}>Choose Again</button>
);

ResetResultsView.propTypes = {
  onResetClick: PropTypes.func.isRequired
};

export default ResetResultsView;
