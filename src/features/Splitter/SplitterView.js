import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FileChooser from "../FileChooser";
import TimeChooser from "../TimeChooser";
import Submitter from "../Submitter";
import ScreenshotPreview from "../ScreenshotPreview";
import Results from "../Results";
import ResetResults from "../ResetResults";
import TimestampPreview from "../TimestampPreview";
import Loader from "../Loader";

const Card = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 8px;
  border: 0.5px solid #eee;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export default class SplitterView extends React.PureComponent {
  static propTypes = {
    isVideoChosen: PropTypes.bool,
    isTimeChosen: PropTypes.bool,
    areResultsAvailable: PropTypes.bool
  };
  viewLogic = () => {
    if (this.props.areResultsAvailable) {
      return (
        <React.Fragment>
          <Results />
          <ResetResults />
        </React.Fragment>
      );
    } else {
      if (this.props.isVideoChosen) {
        return (
          <React.Fragment>
            <TimeChooser />
            {this.props.isTimeChosen && (
              <React.Fragment>
                <TimestampPreview />
                <ScreenshotPreview />
                <Submitter />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      } else {
        return <FileChooser />;
      }
    }
  };
  render() {
    return (
      <Card>
        <Loader />
        {this.viewLogic()}
      </Card>
    );
  }
}
