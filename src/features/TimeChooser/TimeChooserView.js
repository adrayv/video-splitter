import React from "react";
import PropTypes from "prop-types";

export default class TimeChooserView extends React.Component {
  static propTypes = {
    minTime: PropTypes.number.isRequired,
    maxTime: PropTypes.number.isRequired,
    timeChosen: PropTypes.number.isRequired,
    onTimeChange: PropTypes.func.isRequired
  };
  render() {
    return (
      <input
        type="range"
        min={this.props.minTime}
        max={this.props.maxTime}
        value={this.props.timeChosen}
        onChange={e => this.props.onTimeChange(Number(e.target.value))}
        step={0.1}
      />
    );
  }
}
