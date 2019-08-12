import React from "react";
import PropTypes from "prop-types";

const SubmitterView = props => <button onClick={props.onSubmit}>SPLIT</button>;

SubmitterView.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SubmitterView;
