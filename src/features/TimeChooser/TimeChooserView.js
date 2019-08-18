import React from "react";
import PropTypes from "prop-types";
// import debounce from "../../utils/debounce";

export default class TimeChooserView extends React.Component {
  static propTypes = {
    minTime: PropTypes.number.isRequired,
    maxTime: PropTypes.number.isRequired,
    timeChosen: PropTypes.number.isRequired,
    onTimeChange: PropTypes.func.isRequired
  };
  handleChange = e => {
    const time = Number(e.target.value);
    this.props.onTimeChange(time);
  };
  render() {
    return (
      <input
        type="range"
        min={this.props.minTime}
        max={this.props.maxTime}
        value={this.props.timeChosen}
        onChange={this.handleChange}
        step={0.1}
      />
    );
  }
}
