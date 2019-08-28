import React from "react";
import Splitter from "./features/Splitter";
import { Provider as UIProvider } from "./contexts/ui";
import { Provider as VideoProvider } from "./contexts/video";
import { Provider as ResultsProvider } from "./contexts/results";
import { Provider as CloudinaryProvider } from "./contexts/cloudinary";

export default () => (
  <UIProvider>
    <VideoProvider>
      <ResultsProvider>
        <CloudinaryProvider>
          <Splitter />
        </CloudinaryProvider>
      </ResultsProvider>
    </VideoProvider>
  </UIProvider>
);
