import React from "react";
import SplitterView from "./SplitterView";
import { splitVideo } from "../../services/cloudinary";

const movieUrl =
  "https://trello-attachments.s3.amazonaws.com/5d3dfe6d766a108475bbb5dc/5d3e316005e86f8bac935eae/d652a5b9a1ea92968cbf74e2c54377a7/movie.mp4";

export default class SplitterContainer extends React.Component {
  render() {
    return (
      <SplitterView
        onSplit={async file => {
          try {
            const res = await splitVideo(file, 2.5);
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        }}
      />
    );
  }
}
