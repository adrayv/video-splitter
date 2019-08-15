import React from "react";
import PropTypes from "prop-types";
import debounce from "../../utils/debounce";

export default class TimeChooserView extends React.Component {
  static propTypes = {
    minTime: PropTypes.number.isRequired,
    maxTime: PropTypes.number.isRequired,
    timeChosen: PropTypes.number.isRequired,
    onTimeChange: PropTypes.func.isRequired
  };
  handleChange = e => {
    const time = e.target.value;
    return debounce(1000, () => this.props.onTimeChange(Number(time))).call(
      this
    );
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
